import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormNavProp, FormRouteProp } from "../../navigation/types";
import { Errors, validateForm } from "./library/validateForm";
import { useStore } from "../../store";
import { WorkOrderFormView } from "./work-order-form.view";
import { WorkOrderFormData } from "./work-order-form.types";

export const WorkOrderForm: React.FC = () => {
  const navigation = useNavigation<FormNavProp>();
  const route = useRoute<FormRouteProp>();

  const { id } = route.params ?? {};

  const orders = useStore((s) => s.orders);
  const createOrder = useStore((s) => s.createOrder);
  const updateOrder = useStore((s) => s.updateOrder);

  const existing = id ? orders.find((order: { id: string; }) => order.id === id) : null;

  const [form, setForm] = useState<WorkOrderFormData>({
    title: existing?.title ?? "",
    description: existing?.description ?? "",
    status: existing?.status ?? "Pending",
    assignedTo: existing?.assignedTo ?? "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [saving, setSaving] = useState(false);

  const handleChangeField = <K extends keyof WorkOrderFormData>(
    key: K,
    value: WorkOrderFormData[K]
  ) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    };
  };

  const handleSave = async () => {
    const error = validateForm(form);
    if (Object.keys(error).length) {
      setErrors(error);
      return;
    }
    setSaving(true);
    try {
      if (id) {
        updateOrder(id, form);
      } else {
        createOrder(form);
      }
      navigation.goBack();
    } finally {
      setSaving(false);
    }
  };

  return (
    <WorkOrderFormView
      form={form}
      errors={errors}
      saving={saving}
      isEditing={!!id}
      onChangeField={handleChangeField}
      onSave={handleSave}
      navigation={navigation}
    />
  );
};

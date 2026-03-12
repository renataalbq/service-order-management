import React from "react";
import {
  Text, ScrollView, TouchableOpacity,
  ActivityIndicator, KeyboardAvoidingView, Platform,
} from "react-native";
import { FormField } from "../../components/FormField/form-field.controller";
import { colors } from "../../theme";
import { useStyles } from "./work-order-form.styles";
import { IProps } from "./work-order-form.types";
import { StatusPicker } from "../../components/StatusPicker/status-picker.controller";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header/header.controller";
import { WorkOrderStatus } from "../../types";

export const WorkOrderFormView: React.FC<IProps> = (props) => {
  const {
    form,
    errors,
    saving,
    isEditing,
    onChangeField,
    onSave,
    navigation,
  } = props;

  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={isEditing ? "Editar ordem" : "Nova ordem de serviço"}
        navigation={navigation}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <FormField
            label="Título"
            value={form.title}
            onChangeText={(value: string) => onChangeField("title", value)}
            placeholder="Digite o título da ordem de serviço"
            error={errors.title}
            returnKeyType="next"
            autoCapitalize="sentences"
          />

          <FormField
            label="Descrição"
            value={form.description}
            onChangeText={(value: string) => onChangeField("description", value)}
            placeholder="Descreva o problema ou tarefa"
            error={errors.description}
            multiline
            numberOfLines={4}
            style={styles.textarea}
            textAlignVertical="top"
            autoCapitalize="sentences"
          />

          <FormField
            label="Técnico responsável"
            value={form.assignedTo}
            onChangeText={(value: string) => onChangeField("assignedTo", value)}
            placeholder="Digite o nome do técnico"
            error={errors.assignedTo}
            autoCapitalize="words"
            returnKeyType="done"
          />

          {isEditing && (
            <StatusPicker
              value={form.status}
              onChange={(status: WorkOrderStatus) => onChangeField("status", status)}
            />
          )}

          <TouchableOpacity
            style={[styles.saveBtn, saving && styles.saveBtnDisabled]}
            onPress={onSave}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color={colors.textInverse} />
            ) : (
              <Text style={styles.saveBtnText}>
                {isEditing ? "Salvar alterações" : "Criar ordem de serviço"}
              </Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
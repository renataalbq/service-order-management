# 📋 Service Order Management

Aplicativo **offline-first** para gerenciamento de ordens de serviço. Permite criar, visualizar e editar ordens de serviço sem conexão com a internet, sincronizando automaticamente as alterações quando a conectividade é restaurada.
---

## 🚀 Tecnologias

| React Native (TypeScript)
| Realm.js
| Zustand
| React Navigation
| NetInfo

---

## ✨ Funcionalidades

### Ordens de Serviço
- Listagem de todas as ordens de serviço com filtros por status
- Visualização detalhada de cada ordem
- Criação de novas ordens (título, descrição, técnico responsável)
- Edição de ordens existentes, incluindo alteração de status
- Exclusão com soft delete (sincronizada com o servidor)

### Offline-First
- Todas as operações (criar, editar, excluir) funcionam sem internet
- Dados persistidos localmente via Realm.js
- Sincronização automática ao reconectar à internet
- Sincronização manual via botão dedicado na listagem

### Sincronização
- Envio de alterações locais ao servidor (push)
- Recebimento de novos dados e atualizações do servidor (pull)
- Resolução de conflitos por timestamp — versão mais recente prevalece
- Indicador de status: Online / Offline com horário da última sincronização
---

## ⚙️ Como rodar

### Pré-requisitos
- Node.js 18+
- React Native CLI
- Xcode (iOS) ou Android Studio (Android)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/service-order-management.git
cd service-order-management

# Instale as dependências
npm install

# iOS
cd ios && pod install && cd ..

# Inicie o Metro
npx react-native start

# Rode no iOS
npx react-native run-ios

# Rode no Android
npx react-native run-android
```
---

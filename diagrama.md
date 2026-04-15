                           ┌─────────────────────┐
                           │   APP (Expo Router) │
                           └─────────┬───────────┘
                                     │
                                     ▼
                        ┌─────────────────────────┐
                        │     app/_layout.tsx     │
                        │ (RAIZ DO APLICATIVO)    │
                        └─────────┬───────────────┘
                                  │
        ┌─────────────────────────┴─────────────────────────┐
        ▼                                                   ▼
┌──────────────────────┐                         ┌──────────────────────┐
│   CartProvider       │                         │   TicketProvider     │
│ (Carrinho Global)    │                         │ (Bilhetes Globais)   │
└─────────┬────────────┘                         └─────────┬────────────┘
          │                                                │
          ▼                                                ▼
   ┌───────────────┐                              ┌──────────────────┐
   │  carrinho[]   │                              │   bilhetes[]     │
   │ adicionar()   │                              │ adicionarBilhetes│
   │ remover()     │                              │ gerarCodigo()    │
   │ limpar()      │                              └──────────────────┘
   └───────────────┘

                                     │
                                     ▼
                         ┌─────────────────────┐
                         │   app/index.tsx     │
                         │ (REDIRECT INICIAL)  │
                         └─────────┬───────────┘
                                   │
                                   ▼
                      ┌──────────────────────────┐
                      │   /(tabs)/home (HOME)    │
                      └─────────┬────────────────┘
                                │
                                ▼
                     ┌──────────────────────────┐
                     │    DADOS_EVENTOS         │
                     │   (mocks/event.ts)       │
                     └─────────┬────────────────┘
                                │
                                ▼
                    ┌────────────────────────────┐
                    │    EventCard (COMPONENTE)  │
                    └─────────┬──────────────────┘
                              │
            ┌─────────────────┴───────────────────┐
            ▼                                     ▼
  (clicar no card)                       (clicar em comprar)
            │                                     │
            ▼                                     ▼
┌──────────────────────────┐          ┌──────────────────────────┐
│ app/evento/[id].tsx      │          │  CartContext.adicionar() │
│ (DETALHE DO EVENTO)      │          │  adiciona no carrinho    │
└─────────┬────────────────┘          └─────────┬────────────────┘
          │                                     │
          ▼                                     ▼
 (botão comprar)                        carrinho atualizado
          │                                     │
          └───────────────┬─────────────────────┘
                          ▼
                ┌──────────────────────┐
                │   Aba: CART (🛒)     │
                │ app/(tabs)/cart.tsx │
                └─────────┬────────────┘
                          │
          ┌───────────────┴────────────────┐
          ▼                                ▼
   remover item                     finalizar compra
          │                                │
          ▼                                ▼
 CartContext.remover()        ┌──────────────────────────────┐
                             │ TicketContext.adicionarBilhetes│
                             └──────────────┬───────────────┘
                                            │
                                            ▼
                                  CartContext.limpar()
                                            │
                                            ▼
                                ┌──────────────────────┐
                                │ Aba: TICKETS 🎟️      │
                                │ app/(tabs)/tickets   │
                                └──────────────────────┘

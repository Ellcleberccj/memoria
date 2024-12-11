const flowId = "meu-fluxo-id";

// Restaurar estado ao carregar
(function restoreFlowState() {
    const savedStep = localStorage.getItem(`typebot-flow-${flowId}`);
    if (savedStep) {
        Typebot.setStep(savedStep);
    }
})();

// Salvar estado ao mudar de etapa
Typebot.onStepChange(() => {
    const currentStep = Typebot.getCurrentStepId();
    localStorage.setItem(`typebot-flow-${flowId}`, currentStep);
});
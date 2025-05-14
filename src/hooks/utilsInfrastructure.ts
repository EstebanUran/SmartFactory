export const UtilsInfrastructure = {
  /**
   * Crea y retorna una nueva instancia de AbortController.
   * Se usa para cancelar las peticiones.
   */
  loadAbort() {
    const controller = new AbortController()
    return controller
  }
}

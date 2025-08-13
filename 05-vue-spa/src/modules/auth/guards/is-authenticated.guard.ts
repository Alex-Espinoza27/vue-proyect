import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalized, // donde vor:  Guardando el último path visitado
  from: RouteLocationNormalized, // de donde viene
  next: NavigationGuardNext, // función para continuar la navegación
) => {
  const userId = localStorage.getItem('userId'); // Simulando la verificación de autenticación
  localStorage.setItem('lastPath', to.path); // Simulando la autenticación del usuario
  if (!userId) {
    return next({ name: 'login' }); // Redirigir a la página de inicio de sesión si no está autenticado
  }
  return next();
};

export default isAuthenticatedGuard;

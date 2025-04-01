import { CanActivateFn } from '@angular/router';

export const userLoggedGuard: CanActivateFn = (route, state) => {
  return true;
};

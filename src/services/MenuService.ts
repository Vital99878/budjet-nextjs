import { BehaviorSubject } from 'rxjs';

class MenuService {
    menuState$: BehaviorSubject<boolean>
    constructor() {
        this.menuState$ = new BehaviorSubject(false); // Состояние меню (открыто/закрыто)
    }

    toggleMenu() {
        this.menuState$.next(!this.menuState$.value);
    }

    closeMenu() {
        this.menuState$.next(false);
    }
}

const menuService = new MenuService();
export default menuService;

export class Helper {

  static stopEvent($event: KeyboardEvent | MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
  }
}

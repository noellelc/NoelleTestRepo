import { Disposable } from './p1Main';

class Widget implements Disposable {
	public dispose(): void {
	}
}

let w: Widget;
w.dispose();
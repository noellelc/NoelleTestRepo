export interface Disposable {
	dispose(): void;
}

let d: Disposable;
d.dispose();
// interface ExtendableEvent extends Event {
//   waitUntil(promise: Promise<void>): void;
// }

// interface FetchEvent extends ExtendableEvent {
//   readonly request: Request;
//   respondWith(response: Response | Promise<Response>): void;
// }

// // interface ActivateEvent extends ExtendableEvent {}

// // interface InstallEvent extends ExtendableEvent {}

// interface ServiceWorkerGlobalScopeEventMap {
//   'install': ExtendableEvent;
//   'activate': ExtendableEvent;
//   'fetch': FetchEvent;
//   // Agrega otros eventos si es necesario
// }

// interface ServiceWorkerGlobalScope extends EventTarget {
//   addEventListener(
//     type: string,
//     listener: EventListenerOrEventListenerObject | null,
//     options?: boolean | AddEventListenerOptions
//   ): void;

//   addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(
//     type: K,
//     listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => unknown,
//     options?: boolean | AddEventListenerOptions
//   ): void;
//   // Incluye otras propiedades y métodos si es necesario
// }

// declare const self: ServiceWorkerGlobalScope & typeof globalThis;

// src/globals.d.ts

export {}; // Asegura que esto es un módulo y evita colisiones en el ámbito global

declare global {
  interface ExtendableEvent extends Event {
    waitUntil(promise: Promise<unknown>): void;
  }

  interface FetchEvent extends ExtendableEvent {
    readonly request: Request;
    respondWith(response: Response | Promise<Response>): void;
  }

  interface ServiceWorkerGlobalScopeEventMap {
    'install': ExtendableEvent;
    'activate': ExtendableEvent;
    'fetch': FetchEvent;
    // Agrega otros eventos si es necesario
  }

  // interface WorkerGlobalScopeEventMap extends ServiceWorkerGlobalScopeEventMap {}

  interface WorkerGlobalScope extends EventTarget {
    // Sobrecarga genérica compatible con EventTarget
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject | null,
      options?: boolean | AddEventListenerOptions
    ): void;

    // Sobrecarga específica para los eventos del Service Worker
    addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(
      type: K,
      listener: (this: WorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => unknown,
      options?: boolean | AddEventListenerOptions
    ): void;

    // Incluye otras propiedades y métodos si es necesario
  }
}


export interface RequestCallEntity<T> {
  call: Promise<T>
  controller?: AbortController
}

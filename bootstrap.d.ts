///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                             JS BRIDGE CLASSES                             //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

export type bridge$consumer<X> = (x: X) => any;
export interface bridge$iterable<X> {
   [Symbol.iterator](): IterableIterator<X>;
}

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                           INTERNAL JAVA CLASSES                           //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

export class Class<T> extends Object implements Serializable, GenericDeclaration, Type, AnnotatedElement {
   asSubclass<U> (clazz: Class<U>): Class<U>;
   cast (obj: Object): T;
   desiredAssertionStatus (): boolean;
   static forName (module: Module, name: string): Class;
   static forName (class_name: string): Class;
   static forName (name: string, initialize: boolean, loader: ClassLoader): Class;
   getAnnotatedInterfaces (): AnnotatedType[];
   getAnnotatedSuperclass (): AnnotatedType;
   getAnnotation<A extends Annotation> (annotation_class: Class<A>): A;
   getAnnotations (): Annotation[];
   getAnnotationsByType<A extends Annotation> (annotation_class: Class<A>): A[];
   getCanonicalName (): string;
   getClasses (): Class[];
   getClassLoader (): ClassLoader;
   getComponentType (): Class;
   getConstructor (...parameter_types: Class): Constructor<T>;
   getConstructors (): Constructor[];
   getDeclaredAnnotation<A extends Annotation> (annotation_class: Class<A>): A;
   getDeclaredAnnotations (): Annotation[];
   getDeclaredAnnotationsByType<A extends Annotation> (annotation_class: Class<A>): A[];
   getDeclaredClasses (): Class[];
   getDeclaredConstructor (...parameter_types: Class): Constructor<T>;
   getDeclaredConstructors (): Constructor[];
   getDeclaredField (name: string): Field;
   getDeclaredFields (): Field[];
   getDeclaredMethod (name: string, ...parameter_types: Class): Method;
   getDeclaredMethods (): Method[];
   getDeclaringClass (): Class;
   getEnclosingClass (): Class;
   getEnclosingConstructor (): Constructor;
   getEnclosingMethod (): Method;
   getEnumConstants (): T[];
   getField (name: string): Field;
   getFields (): Field[];
   getGenericInterfaces (): Type[];
   getGenericSuperclass (): Type;
   getInterfaces (): Class[];
   getMethod (name: string, ...parameter_types: Class): Method;
   getMethods (): Method[];
   getModifiers (): number;
   getModule (): Module;
   getName (): string;
   getPackage (): Package;
   getPackageName (): string;
   getProtectionDomain (): ProtectionDomain;
   getResource (name: string): URL;
   getResourceAsStream (name: string): InputStream;
   getSigners (): Object[];
   getSimpleName (): string;
   getSuperclass (): Class<T>;
   getTypeName (): string;
   getTypeParameters (): TypeVariable<Class<T>>[];
   isAnnotation (): boolean;
   isAnnotationPresent (annotation_class: Class<Annotation>): boolean;
   isAnonymousClass (): boolean;
   isArray (): boolean;
   isAssignableFrom (cls: Class): boolean;
   isEnum (): boolean;
   isInstance (obj: Object): boolean;
   isInterface (): boolean;
   isLocalClass (): boolean;
   isMemberClass (): boolean;
   isPrimitive (): boolean;
   isSynthetic (): boolean;
   newInstance (): T;
   toGenericString (): string;
   toString (): string;
}
export interface Collection<E> extends Iterable<E> {
   add(e: E): boolean;
   addAll(c: Collection<E>): boolean;
   clear(): void;
   contains(o: Object): boolean;
   containsAll(c: Collection): boolean;
   equals(o: Object): boolean;
   hashCode(): number;
   isEmpty(): boolean;
   iterator(): Iterator<E>;
   parallelStream(): Stream<E>;
   remove(o: Object): boolean;
   removeAll(c: Collection): boolean;
   removeIf(filter: Predicate<E>): boolean;
   retainAll(c: Collection): boolean;
   size(): number;
   spliterator(): Spliterator<E>;
   stream(): Stream<E>;
   toArray(): Object[];
   toArray<T>(a: T[]): T[];
}
export interface Consumer<T> extends bridge$consumer<T> {
   accept(t: T): void;
   andThen(after: Consumer<T>): Consumer<T>;
}
export class File extends Object implements Serializable, Comparable<File> {
   constructor (parent: File, child: string);
   constructor (pathname: string);
   constructor (parent: string, child: string);
   constructor (uri: URI);
   canExecute (): boolean;
   canRead (): boolean;
   canWrite (): boolean;
   compareTo (pathname: File): number;
   createNewFile (): boolean;
   static createTempFile (prefix: string, suffix: string): File;
   static createTempFile (prefix: string, suffix: string, directory: File): File;
   delete (): boolean;
   deleteOnExit (): void;
   equals (obj: Object): boolean;
   exists (): boolean;
   getAbsoluteFile (): File;
   getAbsolutePath (): string;
   getCanonicalFile (): File;
   getCanonicalPath (): string;
   getFreeSpace (): number;
   getName (): string;
   getParent (): string;
   getParentFile (): File;
   getPath (): string;
   getTotalSpace (): number;
   getUsableSpace (): number;
   hashCode (): number;
   isAbsolute (): boolean;
   isDirectory (): boolean;
   isFile (): boolean;
   isHidden (): boolean;
   lastModified (): number;
   length (): number;
   list (): string[];
   list (filter: FilenameFilter): string[];
   listFiles (): File[];
   listFiles (filter: FileFilter): File[];
   listFiles (filter: FilenameFilter): File[];
   static listRoots (): File[];
   mkdir (): boolean;
   mkdirs (): boolean;
   renameTo (dest: File): boolean;
   setExecutable (executable: boolean): boolean;
   setExecutable (executable: boolean, owner_only: boolean): boolean;
   setLastModified (time: number): boolean;
   setReadable (readable: boolean): boolean;
   setReadable (readable: boolean, owner_only: boolean): boolean;
   setReadOnly (): boolean;
   setWritable (writable: boolean): boolean;
   setWritable (writable: boolean, owner_only: boolean): boolean;
   toPath (): Path;
   toString (): string;
   toURI (): URI;
   toURL (): URL;
}
export interface Iterable<T> extends bridge$iterable<T> {
   forEach(action: Consumer<T>): void;
   iterator(): Iterator<T>;
   spliterator(): Spliterator<T>;
}
export interface Iterator<E> {
   forEachRemaining(action: Consumer<E>): void;
   hasNext(): boolean;
   next(): E;
   remove(): void;
}
export class Object {
   constructor ();
   clone (): Object;
   equals (obj: Object): boolean;
   finalize (): void;
   getClass (): Class;
   hashCode (): number;
   notify (): void;
   notifyAll (): void;
   toString (): string;
   wait (): void;
   wait (timeout: number): void;
   wait (timeout: number, nanos: number): void;
}
export interface List<E> extends Collection<E> {
   add(index: number, element: E): void;
   add(e: E): boolean;
   addAll(index: number, c: Collection<E>): boolean;
   addAll(c: Collection<E>): boolean;
   clear(): void;
   contains(o: Object): boolean;
   containsAll(c: Collection): boolean;
   static copyOf<E>(coll: Collection<E>): List<E>;
   equals(o: Object): boolean;
   get(index: number): E;
   hashCode(): number;
   indexOf(o: Object): number;
   isEmpty(): boolean;
   iterator(): Iterator<E>;
   lastIndexOf(o: Object): number;
   listIterator(): ListIterator<E>;
   listIterator(index: number): ListIterator<E>;
   static of<E>(): List<E>;
   static of<E>(e1: E): List<E>;
   static of<E>(...elements: E): List<E>;
   static of<E>(e1: E, e2: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): List<E>;
   remove(index: number): E;
   remove(o: Object): boolean;
   removeAll(c: Collection): boolean;
   replaceAll(operator: UnaryOperator<E>): void;
   retainAll(c: Collection): boolean;
   set(index: number, element: E): E;
   size(): number;
   sort(c: Comparator<E>): void;
   spliterator(): Spliterator<E>;
   subList(from_index: number, to_index: number): List<E>;
   toArray(): Object[];
   toArray<T>(a: T[]): T[];
}
export interface Map<K, V> {
   clear(): void;
   compute(key: K, remapping_funktion: BiFunction<K, V, V>): V;
   computeIfAbsent(key: K, mapping_funktion: Function<K, V>): V;
   computeIfPresent(key: K, remapping_funktion: BiFunction<K, V, V>): V;
   containsKey(key: Object): boolean;
   containsValue(value: Object): boolean;
   static copyOf<K, V>(map: Map<K, V>): Map<K, V>;
   static entry<K, V>(k: K, v: V): Map$Entry<K, V>;
   entrySet(): Set<Map$Entry<K, V>>;
   equals(o: Object): boolean;
   forEach(action: BiConsumer<K, V>): void;
   get(key: Object): V;
   getOrDefault(key: Object, default_value: V): V;
   hashCode(): number;
   isEmpty(): boolean;
   keySet(): Set<K>;
   merge(key: K, value: V, remapping_funktion: BiFunction<V, V, V>): V;
   static of<K, V>(): Map<K, V>;
   static of<K, V>(k1: K, v1: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V
   ): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V,
      k8: K,
      v8: V
   ): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V,
      k8: K,
      v8: V,
      k9: K,
      v9: V
   ): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V,
      k8: K,
      v8: V,
      k9: K,
      v9: V,
      k10: K,
      v10: V
   ): Map<K, V>;
   static ofEntries<K, V>(...entries: Map$Entry<K, V>): Map<K, V>;
   put(key: K, value: V): V;
   putAll(m: Map<K, V>): void;
   putIfAbsent(key: K, value: V): V;
   remove(key: Object): V;
   remove(key: Object, value: Object): boolean;
   replace(key: K, value: V): V;
   replace(key: K, old_value: V, new_value: V): boolean;
   replaceAll(funktion: BiFunction<K, V, V>): void;
   size(): number;
   values(): Collection<V>;
}
export interface Path extends Comparable<Path>, Iterable<Path>, Watchable {
   compareTo(other: Path): number;
   endsWith(other: string): boolean;
   endsWith(other: Path): boolean;
   equals(other: Object): boolean;
   getFileName(): Path;
   getFileSystem(): FileSystem;
   getName(index: number): Path;
   getNameCount(): number;
   getParent(): Path;
   getRoot(): Path;
   hashCode(): number;
   isAbsolute(): boolean;
   iterator(): Iterator<Path>;
   normalize(): Path;
   register(watcher: WatchService, ...events: WatchEvent$Kind): WatchKey;
   register(watcher: WatchService, events: WatchEvent$Kind[], ...modifiers: WatchEvent$Modifier): WatchKey;
   relativize(other: Path): Path;
   resolve(other: string): Path;
   resolve(other: Path): Path;
   resolveSibling(other: string): Path;
   resolveSibling(other: Path): Path;
   startsWith(other: string): boolean;
   startsWith(other: Path): boolean;
   subpath(begin_index: number, end_index: number): Path;
   toAbsolutePath(): Path;
   toFile(): File;
   toRealPath(...options: LinkOption): Path;
   toString(): string;
   toUri(): URI;
}
export interface Predicate<T> {
   and(other: Predicate<T>): Predicate<T>;
   static isEqual<T>(target_ref: Object): Predicate<T>;
   negate(): Predicate<T>;
   or(other: Predicate<T>): Predicate<T>;
   test(t: T): boolean;
}
export interface Set<E> extends Collection<E> {
   add(e: E): boolean;
   addAll(c: Collection<E>): boolean;
   clear(): void;
   contains(o: Object): boolean;
   containsAll(c: Collection): boolean;
   static copyOf<E>(coll: Collection<E>): Set<E>;
   equals(o: Object): boolean;
   hashCode(): number;
   isEmpty(): boolean;
   iterator(): Iterator<E>;
   static of<E>(): Set<E>;
   static of<E>(e1: E): Set<E>;
   static of<E>(...elements: E): Set<E>;
   static of<E>(e1: E, e2: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): Set<E>;
   remove(o: Object): boolean;
   removeAll(c: Collection): boolean;
   retainAll(c: Collection): boolean;
   size(): number;
   spliterator(): Spliterator<E>;
   toArray(): Object[];
   toArray<T>(a: T[]): T[];
}

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                        BUKKIT/SPIGOT/PAPER CLASSES                        //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

import * as classes from './classes';
export class events {
    static event (
        name: 'java.awt.desktop.AboutEvent',
        ...listeners: ((event: classes.AboutEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.AccessWatchpointEvent',
        ...listeners: ((event: classes.AccessWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ActionEvent',
        ...listeners: ((event: classes.ActionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.ActiveEvent',
        ...listeners: ((event: classes.ActiveEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.AdjustmentEvent',
        ...listeners: ((event: classes.AdjustmentEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.AncestorEvent',
        ...listeners: ((event: classes.AncestorEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppEvent',
        ...listeners: ((event: classes.AppEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppForegroundEvent',
        ...listeners: ((event: classes.AppForegroundEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppHiddenEvent',
        ...listeners: ((event: classes.AppHiddenEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppReopenedEvent',
        ...listeners: ((event: classes.AppReopenedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.AssociationChangeNotification.AssocChangeEvent',
        ...listeners: ((event: classes.AssociationChangeNotification$AssocChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.AWTEvent',
        ...listeners: ((event: classes.AWTEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextEvent',
        ...listeners: ((event: classes.BeanContextEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextMembershipEvent',
        ...listeners: ((event: classes.BeanContextMembershipEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceAvailableEvent',
        ...listeners: ((event: classes.BeanContextServiceAvailableEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceRevokedEvent',
        ...listeners: ((event: classes.BeanContextServiceRevokedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.BreakpointEvent',
        ...listeners: ((event: classes.BreakpointEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.CaretEvent',
        ...listeners: ((event: classes.CaretEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ChangeEvent',
        ...listeners: ((event: classes.ChangeEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassPrepareEvent',
        ...listeners: ((event: classes.ClassPrepareEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassUnloadEvent',
        ...listeners: ((event: classes.ClassUnloadEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ComponentEvent',
        ...listeners: ((event: classes.ComponentEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.ConnectionEvent',
        ...listeners: ((event: classes.ConnectionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ContainerEvent',
        ...listeners: ((event: classes.ContainerEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.DocumentEvent',
        ...listeners: ((event: classes.DocumentEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.DocumentEvent',
        ...listeners: ((event: classes.DocumentEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragGestureEvent',
        ...listeners: ((event: classes.DragGestureEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDragEvent',
        ...listeners: ((event: classes.DragSourceDragEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDropEvent',
        ...listeners: ((event: classes.DragSourceDropEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceEvent',
        ...listeners: ((event: classes.DragSourceEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDragEvent',
        ...listeners: ((event: classes.DropTargetDragEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDropEvent',
        ...listeners: ((event: classes.DropTargetDropEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetEvent',
        ...listeners: ((event: classes.DropTargetEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.Event',
        ...listeners: ((event: classes.Event) => {})[]
    ): void;
    static event (
        name: 'jdk.jfr.Event',
        ...listeners: ((event: classes.Event) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.Event',
        ...listeners: ((event: classes.Event) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ExceptionEvent',
        ...listeners: ((event: classes.ExceptionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.FilesEvent',
        ...listeners: ((event: classes.FilesEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.datatransfer.FlavorEvent',
        ...listeners: ((event: classes.FlavorEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.FocusEvent',
        ...listeners: ((event: classes.FocusEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.text.html.FormSubmitEvent',
        ...listeners: ((event: classes.FormSubmitEvent) => {})[]
    ): void;
    static event (
        name: 'javax.net.ssl.HandshakeCompletedEvent',
        ...listeners: ((event: classes.HandshakeCompletedEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.HierarchyEvent',
        ...listeners: ((event: classes.HierarchyEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.text.html.HTMLFrameHyperlinkEvent',
        ...listeners: ((event: classes.HTMLFrameHyperlinkEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.HyperlinkEvent',
        ...listeners: ((event: classes.HyperlinkEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.IndexedPropertyChangeEvent',
        ...listeners: ((event: classes.IndexedPropertyChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InputEvent',
        ...listeners: ((event: classes.InputEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InputMethodEvent',
        ...listeners: ((event: classes.InputMethodEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.InternalFrameEvent',
        ...listeners: ((event: classes.InternalFrameEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InvocationEvent',
        ...listeners: ((event: classes.InvocationEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ItemEvent',
        ...listeners: ((event: classes.ItemEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.KeyEvent',
        ...listeners: ((event: classes.KeyEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sound.sampled.LineEvent',
        ...listeners: ((event: classes.LineEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ListDataEvent',
        ...listeners: ((event: classes.ListDataEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ListSelectionEvent',
        ...listeners: ((event: classes.ListSelectionEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.LocatableEvent',
        ...listeners: ((event: classes.LocatableEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSLoadEvent',
        ...listeners: ((event: classes.LSLoadEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSProgressEvent',
        ...listeners: ((event: classes.LSProgressEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuDragMouseEvent',
        ...listeners: ((event: classes.MenuDragMouseEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuEvent',
        ...listeners: ((event: classes.MenuEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuKeyEvent',
        ...listeners: ((event: classes.MenuKeyEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodEntryEvent',
        ...listeners: ((event: classes.MethodEntryEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodExitEvent',
        ...listeners: ((event: classes.MethodExitEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sound.midi.MidiEvent',
        ...listeners: ((event: classes.MidiEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ModificationWatchpointEvent',
        ...listeners: ((event: classes.ModificationWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnteredEvent',
        ...listeners: ((event: classes.MonitorContendedEnteredEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnterEvent',
        ...listeners: ((event: classes.MonitorContendedEnterEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitedEvent',
        ...listeners: ((event: classes.MonitorWaitedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitEvent',
        ...listeners: ((event: classes.MonitorWaitEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.MouseEvent',
        ...listeners: ((event: classes.MouseEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MouseEvent',
        ...listeners: ((event: classes.MouseEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.MouseWheelEvent',
        ...listeners: ((event: classes.MouseWheelEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MutationEvent',
        ...listeners: ((event: classes.MutationEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingEvent',
        ...listeners: ((event: classes.NamingEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingExceptionEvent',
        ...listeners: ((event: classes.NamingExceptionEvent) => {})[]
    ): void;
    static event (
        name: 'java.util.prefs.NodeChangeEvent',
        ...listeners: ((event: classes.NodeChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenFilesEvent',
        ...listeners: ((event: classes.OpenFilesEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenURIEvent',
        ...listeners: ((event: classes.OpenURIEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.PaintEvent',
        ...listeners: ((event: classes.PaintEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.PeerAddressChangeNotification.AddressChangeEvent',
        ...listeners: ((event: classes.PeerAddressChangeNotification$AddressChangeEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.PopupMenuEvent',
        ...listeners: ((event: classes.PopupMenuEvent) => {})[]
    ): void;
    static event (
        name: 'java.util.prefs.PreferenceChangeEvent',
        ...listeners: ((event: classes.PreferenceChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.PreferencesEvent',
        ...listeners: ((event: classes.PreferencesEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintEvent',
        ...listeners: ((event: classes.PrintEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.PrintFilesEvent',
        ...listeners: ((event: classes.PrintFilesEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobAttributeEvent',
        ...listeners: ((event: classes.PrintJobAttributeEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobEvent',
        ...listeners: ((event: classes.PrintJobEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintServiceAttributeEvent',
        ...listeners: ((event: classes.PrintServiceAttributeEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.PropertyChangeEvent',
        ...listeners: ((event: classes.PropertyChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.QuitEvent',
        ...listeners: ((event: classes.QuitEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jfr.consumer.RecordedEvent',
        ...listeners: ((event: classes.RecordedEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.RowSetEvent',
        ...listeners: ((event: classes.RowSetEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.RowSorterEvent',
        ...listeners: ((event: classes.RowSorterEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.ScreenSleepEvent',
        ...listeners: ((event: classes.ScreenSleepEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jshell.SnippetEvent',
        ...listeners: ((event: classes.SnippetEvent) => {})[]
    ): void;
    static event (
        name: 'javax.net.ssl.SSLSessionBindingEvent',
        ...listeners: ((event: classes.SSLSessionBindingEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.StatementEvent',
        ...listeners: ((event: classes.StatementEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.StepEvent',
        ...listeners: ((event: classes.StepEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.SystemSleepEvent',
        ...listeners: ((event: classes.SystemSleepEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TableColumnModelEvent',
        ...listeners: ((event: classes.TableColumnModelEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TableModelEvent',
        ...listeners: ((event: classes.TableModelEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.source.util.TaskEvent',
        ...listeners: ((event: classes.TaskEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.TextEvent',
        ...listeners: ((event: classes.TextEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadDeathEvent',
        ...listeners: ((event: classes.ThreadDeathEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadStartEvent',
        ...listeners: ((event: classes.ThreadStartEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeExpansionEvent',
        ...listeners: ((event: classes.TreeExpansionEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeModelEvent',
        ...listeners: ((event: classes.TreeModelEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeSelectionEvent',
        ...listeners: ((event: classes.TreeSelectionEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.UIEvent',
        ...listeners: ((event: classes.UIEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.UndoableEditEvent',
        ...listeners: ((event: classes.UndoableEditEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.ldap.UnsolicitedNotificationEvent',
        ...listeners: ((event: classes.UnsolicitedNotificationEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.UserSessionEvent',
        ...listeners: ((event: classes.UserSessionEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDeathEvent',
        ...listeners: ((event: classes.VMDeathEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDisconnectEvent',
        ...listeners: ((event: classes.VMDisconnectEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMStartEvent',
        ...listeners: ((event: classes.VMStartEvent) => {})[]
    ): void;
    static event (
        name: 'java.nio.file.WatchEvent',
        ...listeners: ((event: classes.WatchEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.WatchpointEvent',
        ...listeners: ((event: classes.WatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.WindowEvent',
        ...listeners: ((event: classes.WindowEvent) => {})[]
    ): void;
    static event (
        name: 'javax.xml.stream.events.XMLEvent',
        ...listeners: ((event: classes.XMLEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AboutEvent',
        ...listeners: ((event: classes.AboutEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.AccessWatchpointEvent',
        ...listeners: ((event: classes.AccessWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ActionEvent',
        ...listeners: ((event: classes.ActionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.ActiveEvent',
        ...listeners: ((event: classes.ActiveEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.AdjustmentEvent',
        ...listeners: ((event: classes.AdjustmentEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.AncestorEvent',
        ...listeners: ((event: classes.AncestorEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppEvent',
        ...listeners: ((event: classes.AppEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppForegroundEvent',
        ...listeners: ((event: classes.AppForegroundEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppHiddenEvent',
        ...listeners: ((event: classes.AppHiddenEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppReopenedEvent',
        ...listeners: ((event: classes.AppReopenedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.AssociationChangeNotification.AssocChangeEvent',
        ...listeners: ((event: classes.AssociationChangeNotification$AssocChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.AWTEvent',
        ...listeners: ((event: classes.AWTEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextEvent',
        ...listeners: ((event: classes.BeanContextEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextMembershipEvent',
        ...listeners: ((event: classes.BeanContextMembershipEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceAvailableEvent',
        ...listeners: ((event: classes.BeanContextServiceAvailableEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceRevokedEvent',
        ...listeners: ((event: classes.BeanContextServiceRevokedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.BreakpointEvent',
        ...listeners: ((event: classes.BreakpointEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.CaretEvent',
        ...listeners: ((event: classes.CaretEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ChangeEvent',
        ...listeners: ((event: classes.ChangeEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassPrepareEvent',
        ...listeners: ((event: classes.ClassPrepareEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassUnloadEvent',
        ...listeners: ((event: classes.ClassUnloadEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ComponentEvent',
        ...listeners: ((event: classes.ComponentEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.ConnectionEvent',
        ...listeners: ((event: classes.ConnectionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ContainerEvent',
        ...listeners: ((event: classes.ContainerEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.DocumentEvent',
        ...listeners: ((event: classes.DocumentEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.DocumentEvent',
        ...listeners: ((event: classes.DocumentEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragGestureEvent',
        ...listeners: ((event: classes.DragGestureEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDragEvent',
        ...listeners: ((event: classes.DragSourceDragEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDropEvent',
        ...listeners: ((event: classes.DragSourceDropEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceEvent',
        ...listeners: ((event: classes.DragSourceEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDragEvent',
        ...listeners: ((event: classes.DropTargetDragEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDropEvent',
        ...listeners: ((event: classes.DropTargetDropEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetEvent',
        ...listeners: ((event: classes.DropTargetEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.Event',
        ...listeners: ((event: classes.Event) => {})[]
    ): void;
    static event (
        name: 'jdk.jfr.Event',
        ...listeners: ((event: classes.Event) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.Event',
        ...listeners: ((event: classes.Event) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ExceptionEvent',
        ...listeners: ((event: classes.ExceptionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.FilesEvent',
        ...listeners: ((event: classes.FilesEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.datatransfer.FlavorEvent',
        ...listeners: ((event: classes.FlavorEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.FocusEvent',
        ...listeners: ((event: classes.FocusEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.text.html.FormSubmitEvent',
        ...listeners: ((event: classes.FormSubmitEvent) => {})[]
    ): void;
    static event (
        name: 'javax.net.ssl.HandshakeCompletedEvent',
        ...listeners: ((event: classes.HandshakeCompletedEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.HierarchyEvent',
        ...listeners: ((event: classes.HierarchyEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.text.html.HTMLFrameHyperlinkEvent',
        ...listeners: ((event: classes.HTMLFrameHyperlinkEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.HyperlinkEvent',
        ...listeners: ((event: classes.HyperlinkEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.IndexedPropertyChangeEvent',
        ...listeners: ((event: classes.IndexedPropertyChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InputEvent',
        ...listeners: ((event: classes.InputEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InputMethodEvent',
        ...listeners: ((event: classes.InputMethodEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.InternalFrameEvent',
        ...listeners: ((event: classes.InternalFrameEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InvocationEvent',
        ...listeners: ((event: classes.InvocationEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ItemEvent',
        ...listeners: ((event: classes.ItemEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.KeyEvent',
        ...listeners: ((event: classes.KeyEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sound.sampled.LineEvent',
        ...listeners: ((event: classes.LineEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ListDataEvent',
        ...listeners: ((event: classes.ListDataEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ListSelectionEvent',
        ...listeners: ((event: classes.ListSelectionEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.LocatableEvent',
        ...listeners: ((event: classes.LocatableEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSLoadEvent',
        ...listeners: ((event: classes.LSLoadEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSProgressEvent',
        ...listeners: ((event: classes.LSProgressEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuDragMouseEvent',
        ...listeners: ((event: classes.MenuDragMouseEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuEvent',
        ...listeners: ((event: classes.MenuEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuKeyEvent',
        ...listeners: ((event: classes.MenuKeyEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodEntryEvent',
        ...listeners: ((event: classes.MethodEntryEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodExitEvent',
        ...listeners: ((event: classes.MethodExitEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sound.midi.MidiEvent',
        ...listeners: ((event: classes.MidiEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ModificationWatchpointEvent',
        ...listeners: ((event: classes.ModificationWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnteredEvent',
        ...listeners: ((event: classes.MonitorContendedEnteredEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnterEvent',
        ...listeners: ((event: classes.MonitorContendedEnterEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitedEvent',
        ...listeners: ((event: classes.MonitorWaitedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitEvent',
        ...listeners: ((event: classes.MonitorWaitEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.MouseEvent',
        ...listeners: ((event: classes.MouseEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MouseEvent',
        ...listeners: ((event: classes.MouseEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.MouseWheelEvent',
        ...listeners: ((event: classes.MouseWheelEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MutationEvent',
        ...listeners: ((event: classes.MutationEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingEvent',
        ...listeners: ((event: classes.NamingEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingExceptionEvent',
        ...listeners: ((event: classes.NamingExceptionEvent) => {})[]
    ): void;
    static event (
        name: 'java.util.prefs.NodeChangeEvent',
        ...listeners: ((event: classes.NodeChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenFilesEvent',
        ...listeners: ((event: classes.OpenFilesEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenURIEvent',
        ...listeners: ((event: classes.OpenURIEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.PaintEvent',
        ...listeners: ((event: classes.PaintEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.PeerAddressChangeNotification.AddressChangeEvent',
        ...listeners: ((event: classes.PeerAddressChangeNotification$AddressChangeEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.PopupMenuEvent',
        ...listeners: ((event: classes.PopupMenuEvent) => {})[]
    ): void;
    static event (
        name: 'java.util.prefs.PreferenceChangeEvent',
        ...listeners: ((event: classes.PreferenceChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.PreferencesEvent',
        ...listeners: ((event: classes.PreferencesEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintEvent',
        ...listeners: ((event: classes.PrintEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.PrintFilesEvent',
        ...listeners: ((event: classes.PrintFilesEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobAttributeEvent',
        ...listeners: ((event: classes.PrintJobAttributeEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobEvent',
        ...listeners: ((event: classes.PrintJobEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintServiceAttributeEvent',
        ...listeners: ((event: classes.PrintServiceAttributeEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.PropertyChangeEvent',
        ...listeners: ((event: classes.PropertyChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.QuitEvent',
        ...listeners: ((event: classes.QuitEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jfr.consumer.RecordedEvent',
        ...listeners: ((event: classes.RecordedEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.RowSetEvent',
        ...listeners: ((event: classes.RowSetEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.RowSorterEvent',
        ...listeners: ((event: classes.RowSorterEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.ScreenSleepEvent',
        ...listeners: ((event: classes.ScreenSleepEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jshell.SnippetEvent',
        ...listeners: ((event: classes.SnippetEvent) => {})[]
    ): void;
    static event (
        name: 'javax.net.ssl.SSLSessionBindingEvent',
        ...listeners: ((event: classes.SSLSessionBindingEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.StatementEvent',
        ...listeners: ((event: classes.StatementEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.StepEvent',
        ...listeners: ((event: classes.StepEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.SystemSleepEvent',
        ...listeners: ((event: classes.SystemSleepEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TableColumnModelEvent',
        ...listeners: ((event: classes.TableColumnModelEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TableModelEvent',
        ...listeners: ((event: classes.TableModelEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.source.util.TaskEvent',
        ...listeners: ((event: classes.TaskEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.TextEvent',
        ...listeners: ((event: classes.TextEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadDeathEvent',
        ...listeners: ((event: classes.ThreadDeathEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadStartEvent',
        ...listeners: ((event: classes.ThreadStartEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeExpansionEvent',
        ...listeners: ((event: classes.TreeExpansionEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeModelEvent',
        ...listeners: ((event: classes.TreeModelEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeSelectionEvent',
        ...listeners: ((event: classes.TreeSelectionEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.UIEvent',
        ...listeners: ((event: classes.UIEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.UndoableEditEvent',
        ...listeners: ((event: classes.UndoableEditEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.ldap.UnsolicitedNotificationEvent',
        ...listeners: ((event: classes.UnsolicitedNotificationEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.UserSessionEvent',
        ...listeners: ((event: classes.UserSessionEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDeathEvent',
        ...listeners: ((event: classes.VMDeathEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDisconnectEvent',
        ...listeners: ((event: classes.VMDisconnectEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMStartEvent',
        ...listeners: ((event: classes.VMStartEvent) => {})[]
    ): void;
    static event (
        name: 'java.nio.file.WatchEvent',
        ...listeners: ((event: classes.WatchEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.WatchpointEvent',
        ...listeners: ((event: classes.WatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.WindowEvent',
        ...listeners: ((event: classes.WindowEvent) => {})[]
    ): void;
    static event (
        name: 'javax.xml.stream.events.XMLEvent',
        ...listeners: ((event: classes.XMLEvent) => {})[]
    ): void;
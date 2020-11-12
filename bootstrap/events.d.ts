import * as classes from './classes'
export class events {
    static event (
        name: 'java.awt.desktop.AboutEvent',
        ...listeners: ((event: classes.jadAboutEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.AccessWatchpointEvent',
        ...listeners: ((event: classes.csjeAccessWatchpointEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.ActionEvent',
        ...listeners: ((event: classes.jaeActionEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.ActiveEvent',
        ...listeners: ((event: classes.jaActiveEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.AdjustmentEvent',
        ...listeners: ((event: classes.jaeAdjustmentEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.AncestorEvent',
        ...listeners: ((event: classes.jseAncestorEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppEvent',
        ...listeners: ((event: classes.jadAppEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppForegroundEvent',
        ...listeners: ((event: classes.jadAppForegroundEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppHiddenEvent',
        ...listeners: ((event: classes.jadAppHiddenEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppReopenedEvent',
        ...listeners: ((event: classes.jadAppReopenedEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.AssociationChangeNotification.AssocChangeEvent',
        ...listeners: ((event: classes.csnsAAssocChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.AWTEvent',
        ...listeners: ((event: classes.jaAWTEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextEvent',
        ...listeners: ((event: classes.jbbBeanContextEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextMembershipEvent',
        ...listeners: ((event: classes.jbbBeanContextMembershipEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceAvailableEvent',
        ...listeners: ((event: classes.jbbBeanContextServiceAvailableEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceRevokedEvent',
        ...listeners: ((event: classes.jbbBeanContextServiceRevokedEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.BreakpointEvent',
        ...listeners: ((event: classes.csjeBreakpointEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.CaretEvent',
        ...listeners: ((event: classes.jseCaretEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.ChangeEvent',
        ...listeners: ((event: classes.jseChangeEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassPrepareEvent',
        ...listeners: ((event: classes.csjeClassPrepareEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassUnloadEvent',
        ...listeners: ((event: classes.csjeClassUnloadEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.ComponentEvent',
        ...listeners: ((event: classes.jaeComponentEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sql.ConnectionEvent',
        ...listeners: ((event: classes.jsConnectionEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.ContainerEvent',
        ...listeners: ((event: classes.jaeContainerEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.DocumentEvent',
        ...listeners: ((event: classes.jseDocumentEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.DocumentEvent',
        ...listeners: ((event: classes.owdeDocumentEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragGestureEvent',
        ...listeners: ((event: classes.jadDragGestureEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDragEvent',
        ...listeners: ((event: classes.jadDragSourceDragEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDropEvent',
        ...listeners: ((event: classes.jadDragSourceDropEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceEvent',
        ...listeners: ((event: classes.jadDragSourceEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDragEvent',
        ...listeners: ((event: classes.jadDropTargetDragEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDropEvent',
        ...listeners: ((event: classes.jadDropTargetDropEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetEvent',
        ...listeners: ((event: classes.jadDropTargetEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.Event',
        ...listeners: ((event: classes.csjeEvent) => any)[]
    ): void;
    static event (
        name: 'jdk.jfr.Event',
        ...listeners: ((event: classes.jjEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.Event',
        ...listeners: ((event: classes.owdeEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ExceptionEvent',
        ...listeners: ((event: classes.csjeExceptionEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.FilesEvent',
        ...listeners: ((event: classes.jadFilesEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.datatransfer.FlavorEvent',
        ...listeners: ((event: classes.jadFlavorEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.FocusEvent',
        ...listeners: ((event: classes.jaeFocusEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.text.html.FormSubmitEvent',
        ...listeners: ((event: classes.jsthFormSubmitEvent) => any)[]
    ): void;
    static event (
        name: 'javax.net.ssl.HandshakeCompletedEvent',
        ...listeners: ((event: classes.jnsHandshakeCompletedEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.HierarchyEvent',
        ...listeners: ((event: classes.jaeHierarchyEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.text.html.HTMLFrameHyperlinkEvent',
        ...listeners: ((event: classes.jsthHTMLFrameHyperlinkEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.HyperlinkEvent',
        ...listeners: ((event: classes.jseHyperlinkEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.IndexedPropertyChangeEvent',
        ...listeners: ((event: classes.jbIndexedPropertyChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.InputEvent',
        ...listeners: ((event: classes.jaeInputEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.InputMethodEvent',
        ...listeners: ((event: classes.jaeInputMethodEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.InternalFrameEvent',
        ...listeners: ((event: classes.jseInternalFrameEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.InvocationEvent',
        ...listeners: ((event: classes.jaeInvocationEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.ItemEvent',
        ...listeners: ((event: classes.jaeItemEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.KeyEvent',
        ...listeners: ((event: classes.jaeKeyEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sound.sampled.LineEvent',
        ...listeners: ((event: classes.jssLineEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.ListDataEvent',
        ...listeners: ((event: classes.jseListDataEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.ListSelectionEvent',
        ...listeners: ((event: classes.jseListSelectionEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.LocatableEvent',
        ...listeners: ((event: classes.csjeLocatableEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSLoadEvent',
        ...listeners: ((event: classes.owdlLSLoadEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSProgressEvent',
        ...listeners: ((event: classes.owdlLSProgressEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuDragMouseEvent',
        ...listeners: ((event: classes.jseMenuDragMouseEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuEvent',
        ...listeners: ((event: classes.jseMenuEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuKeyEvent',
        ...listeners: ((event: classes.jseMenuKeyEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodEntryEvent',
        ...listeners: ((event: classes.csjeMethodEntryEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodExitEvent',
        ...listeners: ((event: classes.csjeMethodExitEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sound.midi.MidiEvent',
        ...listeners: ((event: classes.jsmMidiEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ModificationWatchpointEvent',
        ...listeners: ((event: classes.csjeModificationWatchpointEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnteredEvent',
        ...listeners: ((event: classes.csjeMonitorContendedEnteredEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnterEvent',
        ...listeners: ((event: classes.csjeMonitorContendedEnterEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitedEvent',
        ...listeners: ((event: classes.csjeMonitorWaitedEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitEvent',
        ...listeners: ((event: classes.csjeMonitorWaitEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.MouseEvent',
        ...listeners: ((event: classes.jaeMouseEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MouseEvent',
        ...listeners: ((event: classes.owdeMouseEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.MouseWheelEvent',
        ...listeners: ((event: classes.jaeMouseWheelEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MutationEvent',
        ...listeners: ((event: classes.owdeMutationEvent) => any)[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingEvent',
        ...listeners: ((event: classes.jneNamingEvent) => any)[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingExceptionEvent',
        ...listeners: ((event: classes.jneNamingExceptionEvent) => any)[]
    ): void;
    static event (
        name: 'java.util.prefs.NodeChangeEvent',
        ...listeners: ((event: classes.jupNodeChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenFilesEvent',
        ...listeners: ((event: classes.jadOpenFilesEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenURIEvent',
        ...listeners: ((event: classes.jadOpenURIEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.PaintEvent',
        ...listeners: ((event: classes.jaePaintEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.PeerAddressChangeNotification.AddressChangeEvent',
        ...listeners: ((event: classes.csnsPAddressChangeEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.PopupMenuEvent',
        ...listeners: ((event: classes.jsePopupMenuEvent) => any)[]
    ): void;
    static event (
        name: 'java.util.prefs.PreferenceChangeEvent',
        ...listeners: ((event: classes.jupPreferenceChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.PreferencesEvent',
        ...listeners: ((event: classes.jadPreferencesEvent) => any)[]
    ): void;
    static event (
        name: 'javax.print.event.PrintEvent',
        ...listeners: ((event: classes.jpePrintEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.PrintFilesEvent',
        ...listeners: ((event: classes.jadPrintFilesEvent) => any)[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobAttributeEvent',
        ...listeners: ((event: classes.jpePrintJobAttributeEvent) => any)[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobEvent',
        ...listeners: ((event: classes.jpePrintJobEvent) => any)[]
    ): void;
    static event (
        name: 'javax.print.event.PrintServiceAttributeEvent',
        ...listeners: ((event: classes.jpePrintServiceAttributeEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.PropertyChangeEvent',
        ...listeners: ((event: classes.jbPropertyChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.QuitEvent',
        ...listeners: ((event: classes.jadQuitEvent) => any)[]
    ): void;
    static event (
        name: 'jdk.jfr.consumer.RecordedEvent',
        ...listeners: ((event: classes.jjcRecordedEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sql.RowSetEvent',
        ...listeners: ((event: classes.jsRowSetEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.RowSorterEvent',
        ...listeners: ((event: classes.jseRowSorterEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.ScreenSleepEvent',
        ...listeners: ((event: classes.jadScreenSleepEvent) => any)[]
    ): void;
    static event (
        name: 'jdk.jshell.SnippetEvent',
        ...listeners: ((event: classes.jjSnippetEvent) => any)[]
    ): void;
    static event (
        name: 'javax.net.ssl.SSLSessionBindingEvent',
        ...listeners: ((event: classes.jnsSSLSessionBindingEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sql.StatementEvent',
        ...listeners: ((event: classes.jsStatementEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.StepEvent',
        ...listeners: ((event: classes.csjeStepEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.SystemSleepEvent',
        ...listeners: ((event: classes.jadSystemSleepEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TableColumnModelEvent',
        ...listeners: ((event: classes.jseTableColumnModelEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TableModelEvent',
        ...listeners: ((event: classes.jseTableModelEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.source.util.TaskEvent',
        ...listeners: ((event: classes.cssuTaskEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.TextEvent',
        ...listeners: ((event: classes.jaeTextEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadDeathEvent',
        ...listeners: ((event: classes.csjeThreadDeathEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadStartEvent',
        ...listeners: ((event: classes.csjeThreadStartEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeExpansionEvent',
        ...listeners: ((event: classes.jseTreeExpansionEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeModelEvent',
        ...listeners: ((event: classes.jseTreeModelEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeSelectionEvent',
        ...listeners: ((event: classes.jseTreeSelectionEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.UIEvent',
        ...listeners: ((event: classes.owdeUIEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.UndoableEditEvent',
        ...listeners: ((event: classes.jseUndoableEditEvent) => any)[]
    ): void;
    static event (
        name: 'javax.naming.ldap.UnsolicitedNotificationEvent',
        ...listeners: ((event: classes.jnlUnsolicitedNotificationEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.UserSessionEvent',
        ...listeners: ((event: classes.jadUserSessionEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDeathEvent',
        ...listeners: ((event: classes.csjeVMDeathEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDisconnectEvent',
        ...listeners: ((event: classes.csjeVMDisconnectEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMStartEvent',
        ...listeners: ((event: classes.csjeVMStartEvent) => any)[]
    ): void;
    static event (
        name: 'java.nio.file.WatchEvent',
        ...listeners: ((event: classes.jnfWatchEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.WatchpointEvent',
        ...listeners: ((event: classes.csjeWatchpointEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.WindowEvent',
        ...listeners: ((event: classes.jaeWindowEvent) => any)[]
    ): void;
    static event (
        name: 'javax.xml.stream.events.XMLEvent',
        ...listeners: ((event: classes.jxseXMLEvent) => any)[]
    ): void;

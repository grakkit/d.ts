import * as classes from './classes'
export class events {
    static event (
        name: 'java.awt.desktop.AboutEvent',
        ...listeners: ((event: classes.jadAboutEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.AccessWatchpointEvent',
        ...listeners: ((event: classes.csjeAccessWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ActionEvent',
        ...listeners: ((event: classes.jaeActionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.ActiveEvent',
        ...listeners: ((event: classes.jaActiveEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.AdjustmentEvent',
        ...listeners: ((event: classes.jaeAdjustmentEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.AncestorEvent',
        ...listeners: ((event: classes.jseAncestorEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppEvent',
        ...listeners: ((event: classes.jadAppEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppForegroundEvent',
        ...listeners: ((event: classes.jadAppForegroundEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppHiddenEvent',
        ...listeners: ((event: classes.jadAppHiddenEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppReopenedEvent',
        ...listeners: ((event: classes.jadAppReopenedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.AssociationChangeNotification.AssocChangeEvent',
        ...listeners: ((event: classes.csnsAAssocChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.AWTEvent',
        ...listeners: ((event: classes.jaAWTEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextEvent',
        ...listeners: ((event: classes.jbbBeanContextEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextMembershipEvent',
        ...listeners: ((event: classes.jbbBeanContextMembershipEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceAvailableEvent',
        ...listeners: ((event: classes.jbbBeanContextServiceAvailableEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceRevokedEvent',
        ...listeners: ((event: classes.jbbBeanContextServiceRevokedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.BreakpointEvent',
        ...listeners: ((event: classes.csjeBreakpointEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.CaretEvent',
        ...listeners: ((event: classes.jseCaretEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ChangeEvent',
        ...listeners: ((event: classes.jseChangeEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassPrepareEvent',
        ...listeners: ((event: classes.csjeClassPrepareEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassUnloadEvent',
        ...listeners: ((event: classes.csjeClassUnloadEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ComponentEvent',
        ...listeners: ((event: classes.jaeComponentEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.ConnectionEvent',
        ...listeners: ((event: classes.jsConnectionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ContainerEvent',
        ...listeners: ((event: classes.jaeContainerEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.DocumentEvent',
        ...listeners: ((event: classes.jseDocumentEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.DocumentEvent',
        ...listeners: ((event: classes.owdeDocumentEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragGestureEvent',
        ...listeners: ((event: classes.jadDragGestureEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDragEvent',
        ...listeners: ((event: classes.jadDragSourceDragEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDropEvent',
        ...listeners: ((event: classes.jadDragSourceDropEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceEvent',
        ...listeners: ((event: classes.jadDragSourceEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDragEvent',
        ...listeners: ((event: classes.jadDropTargetDragEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDropEvent',
        ...listeners: ((event: classes.jadDropTargetDropEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetEvent',
        ...listeners: ((event: classes.jadDropTargetEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.Event',
        ...listeners: ((event: classes.csjeEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jfr.Event',
        ...listeners: ((event: classes.jjEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.Event',
        ...listeners: ((event: classes.owdeEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ExceptionEvent',
        ...listeners: ((event: classes.csjeExceptionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.FilesEvent',
        ...listeners: ((event: classes.jadFilesEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.datatransfer.FlavorEvent',
        ...listeners: ((event: classes.jadFlavorEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.FocusEvent',
        ...listeners: ((event: classes.jaeFocusEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.text.html.FormSubmitEvent',
        ...listeners: ((event: classes.jsthFormSubmitEvent) => {})[]
    ): void;
    static event (
        name: 'javax.net.ssl.HandshakeCompletedEvent',
        ...listeners: ((event: classes.jnsHandshakeCompletedEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.HierarchyEvent',
        ...listeners: ((event: classes.jaeHierarchyEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.text.html.HTMLFrameHyperlinkEvent',
        ...listeners: ((event: classes.jsthHTMLFrameHyperlinkEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.HyperlinkEvent',
        ...listeners: ((event: classes.jseHyperlinkEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.IndexedPropertyChangeEvent',
        ...listeners: ((event: classes.jbIndexedPropertyChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InputEvent',
        ...listeners: ((event: classes.jaeInputEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InputMethodEvent',
        ...listeners: ((event: classes.jaeInputMethodEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.InternalFrameEvent',
        ...listeners: ((event: classes.jseInternalFrameEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InvocationEvent',
        ...listeners: ((event: classes.jaeInvocationEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ItemEvent',
        ...listeners: ((event: classes.jaeItemEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.KeyEvent',
        ...listeners: ((event: classes.jaeKeyEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sound.sampled.LineEvent',
        ...listeners: ((event: classes.jssLineEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ListDataEvent',
        ...listeners: ((event: classes.jseListDataEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ListSelectionEvent',
        ...listeners: ((event: classes.jseListSelectionEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.LocatableEvent',
        ...listeners: ((event: classes.csjeLocatableEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSLoadEvent',
        ...listeners: ((event: classes.owdlLSLoadEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSProgressEvent',
        ...listeners: ((event: classes.owdlLSProgressEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuDragMouseEvent',
        ...listeners: ((event: classes.jseMenuDragMouseEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuEvent',
        ...listeners: ((event: classes.jseMenuEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuKeyEvent',
        ...listeners: ((event: classes.jseMenuKeyEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodEntryEvent',
        ...listeners: ((event: classes.csjeMethodEntryEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodExitEvent',
        ...listeners: ((event: classes.csjeMethodExitEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sound.midi.MidiEvent',
        ...listeners: ((event: classes.jsmMidiEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ModificationWatchpointEvent',
        ...listeners: ((event: classes.csjeModificationWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnteredEvent',
        ...listeners: ((event: classes.csjeMonitorContendedEnteredEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnterEvent',
        ...listeners: ((event: classes.csjeMonitorContendedEnterEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitedEvent',
        ...listeners: ((event: classes.csjeMonitorWaitedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitEvent',
        ...listeners: ((event: classes.csjeMonitorWaitEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.MouseEvent',
        ...listeners: ((event: classes.jaeMouseEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MouseEvent',
        ...listeners: ((event: classes.owdeMouseEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.MouseWheelEvent',
        ...listeners: ((event: classes.jaeMouseWheelEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MutationEvent',
        ...listeners: ((event: classes.owdeMutationEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingEvent',
        ...listeners: ((event: classes.jneNamingEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingExceptionEvent',
        ...listeners: ((event: classes.jneNamingExceptionEvent) => {})[]
    ): void;
    static event (
        name: 'java.util.prefs.NodeChangeEvent',
        ...listeners: ((event: classes.jupNodeChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenFilesEvent',
        ...listeners: ((event: classes.jadOpenFilesEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenURIEvent',
        ...listeners: ((event: classes.jadOpenURIEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.PaintEvent',
        ...listeners: ((event: classes.jaePaintEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.PeerAddressChangeNotification.AddressChangeEvent',
        ...listeners: ((event: classes.csnsPAddressChangeEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.PopupMenuEvent',
        ...listeners: ((event: classes.jsePopupMenuEvent) => {})[]
    ): void;
    static event (
        name: 'java.util.prefs.PreferenceChangeEvent',
        ...listeners: ((event: classes.jupPreferenceChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.PreferencesEvent',
        ...listeners: ((event: classes.jadPreferencesEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintEvent',
        ...listeners: ((event: classes.jpePrintEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.PrintFilesEvent',
        ...listeners: ((event: classes.jadPrintFilesEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobAttributeEvent',
        ...listeners: ((event: classes.jpePrintJobAttributeEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobEvent',
        ...listeners: ((event: classes.jpePrintJobEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintServiceAttributeEvent',
        ...listeners: ((event: classes.jpePrintServiceAttributeEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.PropertyChangeEvent',
        ...listeners: ((event: classes.jbPropertyChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.QuitEvent',
        ...listeners: ((event: classes.jadQuitEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jfr.consumer.RecordedEvent',
        ...listeners: ((event: classes.jjcRecordedEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.RowSetEvent',
        ...listeners: ((event: classes.jsRowSetEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.RowSorterEvent',
        ...listeners: ((event: classes.jseRowSorterEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.ScreenSleepEvent',
        ...listeners: ((event: classes.jadScreenSleepEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jshell.SnippetEvent',
        ...listeners: ((event: classes.jjSnippetEvent) => {})[]
    ): void;
    static event (
        name: 'javax.net.ssl.SSLSessionBindingEvent',
        ...listeners: ((event: classes.jnsSSLSessionBindingEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.StatementEvent',
        ...listeners: ((event: classes.jsStatementEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.StepEvent',
        ...listeners: ((event: classes.csjeStepEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.SystemSleepEvent',
        ...listeners: ((event: classes.jadSystemSleepEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TableColumnModelEvent',
        ...listeners: ((event: classes.jseTableColumnModelEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TableModelEvent',
        ...listeners: ((event: classes.jseTableModelEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.source.util.TaskEvent',
        ...listeners: ((event: classes.cssuTaskEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.TextEvent',
        ...listeners: ((event: classes.jaeTextEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadDeathEvent',
        ...listeners: ((event: classes.csjeThreadDeathEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadStartEvent',
        ...listeners: ((event: classes.csjeThreadStartEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeExpansionEvent',
        ...listeners: ((event: classes.jseTreeExpansionEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeModelEvent',
        ...listeners: ((event: classes.jseTreeModelEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeSelectionEvent',
        ...listeners: ((event: classes.jseTreeSelectionEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.UIEvent',
        ...listeners: ((event: classes.owdeUIEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.UndoableEditEvent',
        ...listeners: ((event: classes.jseUndoableEditEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.ldap.UnsolicitedNotificationEvent',
        ...listeners: ((event: classes.jnlUnsolicitedNotificationEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.UserSessionEvent',
        ...listeners: ((event: classes.jadUserSessionEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDeathEvent',
        ...listeners: ((event: classes.csjeVMDeathEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDisconnectEvent',
        ...listeners: ((event: classes.csjeVMDisconnectEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMStartEvent',
        ...listeners: ((event: classes.csjeVMStartEvent) => {})[]
    ): void;
    static event (
        name: 'java.nio.file.WatchEvent',
        ...listeners: ((event: classes.jnfWatchEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.WatchpointEvent',
        ...listeners: ((event: classes.csjeWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.WindowEvent',
        ...listeners: ((event: classes.jaeWindowEvent) => {})[]
    ): void;
    static event (
        name: 'javax.xml.stream.events.XMLEvent',
        ...listeners: ((event: classes.jxseXMLEvent) => {})[]
    ): void;

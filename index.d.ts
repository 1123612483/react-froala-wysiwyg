declare module 'react-froala-wysiwyg' {
  export interface FroalaEditorProps {
    tag?: string;
    config?: FroalaEditorConfig;
    model?: string | object | null;
    onModelChange?: (model: string) => void;
    onManualControllerReady?: (controls: {
      destroy(): void;
      getEditor(): any;
      initialize(): object;
    }) => void;
  }

  export type FroalaEditorEventsType = 'blur' | 'buttons.refresh' | 'charCounter.exceeded' | 'charCounter.update' | 'click' | 'codeView.update' | 'commands.after'
    | 'commands.before' | 'commands.mousedown' | 'commands.redo' | 'commands.undo' | 'contentChanged' | 'destroy' | 'drop' | 'edit.off' | 'edit.on' | 'element.dropped'
    | 'embedly.beforeRemove' | 'file.beforeUpload' | 'file.error' | 'file.inserted' | 'file.unlink' | 'file.uploaded' | 'file.uploadedToS3' | 'focus' | 'html.afterGet'
    | 'html.beforeGet' | 'html.get' | 'html.processGet' | 'html.set' | 'image.beforePasteUpload' | 'image.beforeRemove' | 'image.beforeUpload' | 'image.error'
    | 'image.hideResizer' | 'image.inserted' | 'image.loaded' | 'image.removed' | 'image.replaced' | 'image.resize' | 'image.resizeEnd' | 'image.uploaded'
    | 'image.uploadedToS3' | 'imageManager.beforeDeleteImage' | 'imageManager.error' | 'imageManager.imageDeleted' | 'imageManager.imageLoaded' | 'imageManager.imagesLoaded'
    | 'initializationDelayed' | 'initialized' | 'input' | 'keydown' | 'keypress' | 'keyup' | 'link.bad' | 'link.beforeInsert' | 'link.beforeRemove' | 'mousedown' | 'mouseup'
    | 'paste.after' | 'paste.afterCleanup' | 'paste.before' | 'paste.beforeCleanup' | 'paste.wordPaste' | 'popups.hide.[id]' | 'popups.show.[id]' | 'position.refresh'
    | 'quickInsert.commands.after' | 'quickInsert.commands.before' | 'save.after' | 'save.before' | 'save.error' | 'shortcut' | 'snapshot.after' | 'snapshot.before'
    | 'table.inserted' | 'table.resized' | 'toolbar.esc' | 'toolbar.focusEditor' | 'toolbar.hide' | 'toolbar.show' | 'touchend' | 'touchstart' | 'url.linked'
    | 'video.beforeRemove' | 'video.beforeUpload' | 'video.codeError' | 'video.hideResizer' | 'video.inserted' | 'video.linkError' | 'video.loaded'
    | 'video.removed' | 'video.replaced' | 'video.uploaded' | 'video.uploadedToS3' | 'window.copy' | 'window.cut';

  export interface FroalaEditorConfig {
    apiKey?: string;
    app?: string;
    attribution?: boolean;
    autoStart?: boolean;
    aviaryKey?: string;
    aviaryOptions?: {
      displayImageSize: boolean;
      theme: string;
    };
    charCounterCount?: boolean;
    charCounterMax?: number;
    codeBeautifierOptions?: {
      end_with_newline: boolean;
      indent_inner_html: boolean;
      extra_liners: string[];
      brace_style: string;
      indent_char: string;
      indent_size: number;
      wrap_line_length: number;
    };
    codeMirror?: object;
    codeMirrorOptions?: {
      indentWithTabs: boolean;
      lineNumbers: boolean;
      lineWrapping: boolean;
      mode: string;
      tabMode: string;
      tabSize: number;
    };
    codeViewKeepActiveButtons?: string[];
    codoxOptions?: object;
    colorsBackground?: string[];
    colorsButtons?: string[];
    colorsHEXInput?: boolean;
    colorsStep?: number;
    colorsText?: string[];
    direction?: 'auto' | 'ltr' | 'rtl';
    disableRightClick?: boolean;
    docId?: string;
    documentReady?: boolean;
    dragInline?: boolean;
    editInPopup?: boolean;
    editor?: object;
    editorClass?: string;
    embedlyEditButtons?: string[];
    emoticonsSet?: { code: string; desc: string; }[];
    emoticonsStep?: number;
    emoticonsUseImage?: boolean;
    enter?: '$.FroalaEditor.ENTER_P' | '$.FroalaEditor.ENTER_DIV' | '$.FroalaEditor.ENTER_BR';
    entities?: string;
    events?: { [K in FroalaEditorEventsType]?: Function };
    faButtons?: string[];
    fileAllowedTypes?: string[];
    fileInsertButtons?: string[];
    fileMaxSize?: number;
    fileUpload?: boolean;
    fileUploadMethod?: string;
    fileUploadParam?: string;
    fileUploadParams?: object;
    fileUploadToS3?: object;
    fileUploadURL?: string;
    fileUseSelectedText?: boolean;
    fontAwesomeSets?: { title: string; list: string[]; }[];
    fontAwesomeTemplate?: string;
    fontFamily?: object;
    fontFamilyDefaultSelection?: string;
    fontFamilySelection?: boolean;
    fontSize?: string[];
    fontSizeDefaultSelection?: string;
    fontSizeSelection?: boolean;
    fontSizeUnit?: 'px' | 'pt';
    formEditButtons?: ('inputStyle' | 'inputEdit')[];
    formMultipleStyles?: boolean;
    formStyles?: object;
    formUpdateButtons: ('inputBack' | '|')[];
    fullPage?: boolean;
    height?: number;
    heightMax?: number;
    heightMin?: number;
    helpSets?: { title: string; commands: { value: string; desc: string; }[] }[];
    htmlAllowComments?: boolean;
    htmlAllowedAttrs?: string[];
    htmlAllowedEmptyTags?: string[];
    htmlAllowedStyleProps?: string[];
    htmlAllowedTags?: string[];
    htmlDoNotWrapTags?: string[];
    htmlExecuteScripts?: boolean;
    htmlIgnoreCSSProperties?: string[];
    htmlRemoveTags?: string[];
    htmlSimpleAmpersand?: boolean;
    htmlUntouched?: boolean;
    iconsTemplate?: string;
    iframe?: boolean;
    iframeDefaultStyle?: string;
    iframeStyle?: string;
    iframeStyleFiles?: string[];
    imageAddNewLine?: boolean;
    imageAllowedTypes?: string[];
    imageAltButtons?: ('imageBack' | '|')[];
    imageCORSProxy?: string;
    imageDefaultAlign?: 'left' | 'center' | 'right';
    imageDefaultDisplay?: 'inline' | 'block';
    imageDefaultMargin?: number;
    imageDefaultWidth?: number;
    imageEditButtons?: string[];
    imageInsertButtons?: string[];
    imageManagerDeleteMethod?: string;
    imageManagerDeleteParams?: object;
    imageManagerDeleteURL?: string;
    imageManagerLoadMethod?: string;
    imageManagerLoadParams?: object;
    imageManagerLoadURL?: string;
    imageManagerPageSize?: number;
    imageManagerPreloader?: string;
    imageManagerScrollOffset?: number;
    imageManagerToggleTags?: boolean;
    imageMaxSize?: number;
    imageMinWidth?: number;
    imageMove?: boolean;
    imageMultipleStyles?: boolean;
    imageOutputSize?: boolean;
    imagePaste?: boolean;
    imagePasteProcess?: boolean;
    imageResize?: boolean;
    imageResizeWithPercent?: boolean;
    imageRoundPercent?: boolean;
    imageSizeButtons?: ('inputBack' | '|')[];
    imageSplitHTML?: boolean;
    imageStyles?: object;
    imageTUIOptions?: object;
    imageTextNear?: boolean;
    imageUpload?: boolean;
    imageUploadMethod?: string;
    imageUploadParam?: string;
    imageUploadParams?: object;
    imageUploadRemoteUrls?: boolean;
    imageUploadToS3?: object;
    imageUploadURL?: string | null;
    indentMargin?: number;
    initOnClick?: boolean;
    inlineClasses?: object;
    inlineStyles?: object;
    keepFormatOnDelete?: boolean;
    language?: string;
    lineBreakerHorizontalOffset?: number;
    lineBreakerOffset?: number;
    lineBreakerTags?: string[];
    lineHeights?: object;
    linkAlwaysBlank?: boolean;
    linkAlwaysNoFollow?: boolean;
    linkAttributes?: object;
    linkAutoPrefix?: string;
    linkConvertEmailAddress?: boolean;
    linkEditButtons?: ('linkOpen' | 'linkStyle' | 'linkEdit' | 'linkRemove')[];
    linkInsertButtons?: ('linkBack' | '|' | 'linkList')[];
    linkList?: any[];
    linkMultipleStyles?: boolean;
    linkNoOpener?: boolean;
    linkNoReferrer?: boolean;
    linkStyles?: object;
    linkText?: boolean;
    listAdvancedTypes?: boolean;
    multiLine?: boolean;
    paragraphDefaultSelection?: string;
    paragraphMultipleStyles?: boolean;
    paragraphStyles?: object;
    pasteAllowLocalImages?: boolean;
    pasteAllowedStyleProps?: string[];
    pasteDeniedAttrs?: ('class' | 'id' | 'style')[];
    pasteDeniedTags?: ('a' | 'i')[];
    pastePlain?: boolean;
    placeholderText?: string;
    pluginsEnabled?: string[] | null;
    quickInsertButtons?: string[];
    quickInsertTags?: string[];
    requestHeaders?: object;
    requestWithCORS?: boolean;
    requestWithCredentials?: boolean;
    saveInterval?: number;
    saveMethod?: string;
    saveParam?: string;
    saveParams?: object;
    saveURL?: string | null;
    scrollableContainer?: string;
    shortcutsEnabled?: string[];
    shortcutsHint?: boolean;
    specialCharButtons?: ('specialCharBack' | '|')[];
    specialCharactersSets?: {
      title: string;
      list: {
        char: string;
        desc: string;
      }
    }[];
    spellcheck?: boolean;
    tabIndex?: number;
    tabSpaces?: number;
    tableCellMultipleStyles?: boolean;
    tableCellStyles?: object;
    tableColors?: string[];
    tableColorsButtons?: string[];
    tableColorsStep?: number;
    tableDefaultWidth?: string;
    tableEditButtons: string[];
    tableInsertButtons?: string[];
    tableInsertHelper?: boolean;
    tableInsertHelperOffset?: number;
    tableInsertMaxSize?: number;
    tableMultipleStyles?: boolean;
    tableResizer?: boolean;
    tableResizerOffset?: number;
    tableResizingLimit?: number;
    tableStyles?: object;
    theme?: string | null;
    toolbarBottom?: boolean;
    toolbarButtons?: object | object[];
    toolbarButtonsMD?: object | object[];
    toolbarButtonsSM?: object | object[];
    toolbarButtonsXS?: object | object[];
    toolbarContainer?: boolean;
    toolbarInline?: boolean;
    toolbarSticky?: boolean;
    toolbarStickyOffset?: number;
    toolbarVisibleWithoutSelection?: boolean;
    tooltips?: boolean;
    typingTimer?: number;
    useClasses?: boolean;
    username?: string;
    videoAllowedProviders?: string[];
    videoAllowedTypes?: string[];
    videoDefaultAlign?: 'left' | 'center' | 'right';
    videoDefaultDisplay?: 'inline' | 'block';
    videoDefaultWidth?: number;
    videoEditButtons?: string[];
    videoInsertButtons?: string[];
    videoMaxSize?: number;
    videoMove?: boolean;
    videoResize?: boolean;
    videoResponsive?: boolean;
    videoSizeButtons?: ('videoBack' | '|')[];
    videoSplitHTML?: boolean;
    videoTextNear?: boolean;
    videoUpload?: boolean;
    videoUploadMethod?: string;
    videoUploadParam?: string;
    videoUploadParams?: object;
    videoUploadToS3?: object;
    videoUploadURL?: string;
    width?: string;
    wordAllowedStyleProps?: string[];
    wordDeniedAttrs?: string;
    wordDeniedTags?: string;
    wordPasteKeepFormatting?: boolean;
    wordPasteModal?: boolean;
    zIndex?: number;
  }

  export default class FroalaEditor extends React.Component<FroalaEditorProps> { }
}

declare module 'react-froala-wysiwyg/FroalaEditorView' {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
  }

  export default class FroalaEditorView extends React.Component<MyComponentProps> { }
}

declare module 'react-froala-wysiwyg/FroalaEditorImg' {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
  }

  export default class FroalaEditorImg extends React.Component<MyComponentProps> { }
}

declare module 'react-froala-wysiwyg/FroalaEditorA' {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
  }

  export default class FroalaEditorA extends React.Component<MyComponentProps>
  {

  }
}

declare module 'react-froala-wysiwyg/FroalaEditorButton' {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
  }

  export default class FroalaEditorButton extends React.Component<MyComponentProps> {

  }
}

declare module 'react-froala-wysiwyg/FroalaEditorInput' {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
  }

  export default class FroalaEditorInput extends React.Component<MyComponentProps> {

  }
}

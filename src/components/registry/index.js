// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react";
import buttonCode from "./button/code";
import badgeCode from "./badge/code";
import accordionCode from "./accordion/code";
import alertCode from "./alert/code";
import cardCode from "./card/code";
import alertDialogCode from "./alert-dialog/code";
import aspectRatioCode from "./aspect-ratio/code";
import avatarCode from "./avatar/code";
import calendarCode from "./calendar/code";
import checkboxCode from "./checkbox/code";
import collapsibleCode from "./collapsible/code";
import comboboxCode from "./combobox/code";
import commandCode from "./command/code";
import dialogCode from "./dialog/code";
import datePickerCode from "./date-picker/code";
import contextMenuCode from "./context-menu/code";
import dropdownMenuCode from "./dropdown-menu/code";
import formCode from "./form/code";
import labelCode from "./label/code";
import inputCode from "./input/code";
import hoverCardCode from "./hover-card/code";
import menubarCode from "./menubar/code";
import navigationMenuCode from "./navigation-menu/code";
import popoverCode from "./popover/code";
import progressCode from "./progress/code";
import radioGroupCode from "./radio-group/code";
import scrollAreaCode from "./scroll-area/code";
import selectCode from "./select/code";
import sliderCode from "./slider/code";
import switchCode from "./switch/code";
import tabsCode from "./tabs/code";
import textareaCode from "./textarea/code";
import toastCode from "./toast/code";
import tooltipCode from "./tooltip/code";
import separatorCode from "./separator/code";
import tableCode from "./table/code";
import toggleGroupCode from "./toggle-group/code";
import toggleCode from "./toggle/code";
import skeletonCode from "./skeleton/code";
import sheetCode from "./sheet/code";

import buttonInstall from "./button/install";
import badgeInstall from "./badge/install";
import accordionInstall from "./accordion/install";
import alertInstall from "./alert/install";
import cardInstall from "./card/install";
import alertDialogInstall from "./alert-dialog/install";
import aspectRatioInstall from "./aspect-ratio/install";
import avatarInstall from "./avatar/install";
import calendarInstall from "./calendar/install";
import checkboxInstall from "./checkbox/install";

import collapsibleInstall from "./collapsible/install";
//import comboboxInstall from "./combobox/install";
import commandInstall from "./command/install";
import dialogInstall from "./dialog/install";
//import datePickerInstall from "./date-picker/install";
import contextMenuInstall from "./context-menu/install";
import dropdownMenuInstall from "./dropdown-menu/install";
import formInstall from "./form/install";
import labelInstall from "./label/install";
import inputInstall from "./input/install";
import hoverCardInstall from "./hover-card/install";
import menubarInstall from "./menubar/install";
import navigationMenuInstall from "./navigation-menu/install";
import popoverInstall from "./popover/install";
import progressInstall from "./progress/install";
import radioGroupInstall from "./radio-group/install";
import scrollAreaInstall from "./scroll-area/install";
import selectInstall from "./select/install";
import sliderInstall from "./slider/install";
import switchInstall from "./switch/install";
import tabsInstall from "./tabs/install";
import textareaInstall from "./textarea/install";
import toastInstall from "./toast/install";
import tooltipInstall from "./tooltip/install";
import separatorInstall from "./separator/install";
import tableInstall from "./table/install";
import toggleGroupInstall from "./toggle-group/install";
import toggleInstall from "./toggle/install";
import skeletonInstall from "./skeleton/install";
import sheetInstall from "./sheet/install";
import themeToggleCode from "./theme-toggle/code";
import themeToggleInstall from "./theme-toggle/install";

const sizes = {
  xxSmall: "xx-small",
  xSmall: "x-small",
  small: "small",
  medium: "medium",
  large: "large",
  xLarge: "x-Large",
  xxLarge: "xx-Large",
};

export const Index = {
  "theme-toggle": {
    disable: true,
    name: "theme-toggle",
    size: "small",
    type: "components:ui",
    code: themeToggleCode,
    install: themeToggleInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./theme-toggle")),
    files: ["registry/default/ui/themeToggle.tsx"],
  },
  button: {
    name: "button",
    size: "small",
    type: "components:ui",
    code: buttonCode,
    install: buttonInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./button")),
    files: ["registry/default/ui/button.tsx"],
  },
  badge: {
    name: "badge",
    size: "small",
    type: "components:ui",
    code: badgeCode,
    install: badgeInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./badge")),
    files: ["registry/default/ui/button.tsx"],
  },
  accordion: {
    name: "accordion",
    size: "medium",
    touchDisabled: true,
    type: "components:ui",
    code: accordionCode,
    install: accordionInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./accordion")),
    files: ["registry/default/ui/button.tsx"],
  },
  alert: {
    name: "alert",
    size: "medium",
    type: "components:ui",
    code: alertCode,
    install: alertInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./alert")),
    files: ["registry/default/ui/button.tsx"],
  },
  card: {
    name: "card",
    size: "large",
    type: "components:ui",
    code: cardCode,
    install: cardInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./card")),
    files: ["registry/default/ui/button.tsx"],
  },

  "alert-dialog": {
    name: "Alert Dialog",
    type: "components:ui",
    code: alertDialogCode,
    install: alertDialogInstall,
    size: "small",

    registryDependencies: undefined,
    component: React.lazy(() => import("./alert-dialog")),
    files: ["registry/default/ui/button.tsx"],
  },
  "aspect-ratio": {
    name: "aspect-ratio",
    type: "components:ui",
    code: aspectRatioCode,
    install: aspectRatioInstall,
    size: "large",

    registryDependencies: undefined,
    component: React.lazy(() => import("./aspect-ratio")),
    files: ["registry/default/ui/button.tsx"],
  },
  avatar: {
    name: "avatar",
    type: "components:ui",
    code: avatarCode,
    install: avatarInstall,
    size: "small",

    registryDependencies: undefined,
    component: React.lazy(() => import("./avatar")),
    files: ["registry/default/ui/button.tsx"],
  },
  calendar: {
    name: "calendar",
    type: "components:ui",
    code: calendarCode,
    install: calendarInstall,
    size: "large",
    touchDisabled: true,
    registryDependencies: undefined,
    component: React.lazy(() => import("./calendar")),
    files: ["registry/default/ui/button.tsx"],
  },
  checkbox: {
    name: "checkbox",
    type: "components:ui",
    code: checkboxCode,
    install: checkboxInstall,
    size: "medium",

    registryDependencies: undefined,
    component: React.lazy(() => import("./checkbox")),
    files: ["registry/default/ui/button.tsx"],
  },
  collapsible: {
    name: "collapsible",
    type: "components:ui",
    code: collapsibleCode,
    install: collapsibleInstall,
    size: sizes.medium,
    touchDisabled: true,

    registryDependencies: undefined,
    component: React.lazy(() => import("./collapsible")),
    files: ["registry/default/ui/button.tsx"],
  },
  combobox: {
    name: "combobox",
    type: "components:ui",
    code: comboboxCode,
    size: sizes.medium,

    registryDependencies: undefined,
    component: React.lazy(() => import("./combobox")),
    files: ["registry/default/ui/button.tsx"],
  },
  command: {
    name: "command",
    type: "components:ui",
    code: commandCode,
    install: commandInstall,
    size: "large",

    registryDependencies: undefined,
    component: React.lazy(() => import("./command")),
    files: ["registry/default/ui/button.tsx"],
  },
  dialog: {
    name: "dialog",
    type: "components:ui",
    code: dialogCode,
    install: dialogInstall,
    size: "small",

    registryDependencies: undefined,
    component: React.lazy(() => import("./dialog")),
    files: ["registry/default/ui/button.tsx"],
  },
  "date-picker": {
    name: "date-picker",
    type: "components:ui",
    code: datePickerCode,
    size: sizes.medium,

    registryDependencies: undefined,
    component: React.lazy(() => import("./date-picker")),
    files: ["registry/default/ui/button.tsx"],
  },
  "context-menu": {
    name: "context-menu",
    size: sizes.medium, // Assumed size
    type: "components:ui",
    install: contextMenuInstall,
    code: contextMenuCode,
    registryDependencies: undefined,
    component: React.lazy(() => import("./context-menu")),
    files: ["registry/default/ui/button.tsx"],
  },
  "dropdown-menu": {
    name: "dropdown-menu",
    size: "small",
    type: "components:ui",
    code: dropdownMenuCode,
    install: dropdownMenuInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./dropdown-menu")),
    files: ["registry/default/ui/button.tsx"],
  },
  form: {
    name: "form",
    size: "medium",
    type: "components:ui",
    code: formCode,
    install: formInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./form")),
    files: ["registry/default/ui/button.tsx"],
  },
  label: {
    name: "label",
    size: sizes.medium,
    type: "components:ui",
    code: labelCode,
    install: labelInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./label")),
    files: ["registry/default/ui/button.tsx"],
  },
  input: {
    name: "input",
    size: sizes.medium,
    type: "components:ui",
    code: inputCode,
    install: inputInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./input")),
    files: ["registry/default/ui/button.tsx"],
  },
  "hover-card": {
    name: "hover-card",
    size: "medium",
    type: "components:ui",
    code: hoverCardCode,
    install: hoverCardInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./hover-card")),
    files: ["registry/default/ui/button.tsx"],
  },
  menubar: {
    name: "menubar",
    size: "medium",
    type: "components:ui",
    code: menubarCode,
    install: menubarInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./menubar")),
    files: ["registry/default/ui/button.tsx"],
  },
  "navigation-menu": {
    name: "navigation-menu",
    size: "large",
    type: "components:ui",
    touchDisabled: true,
    code: navigationMenuCode,
    install: navigationMenuInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./navigation-menu")),
    files: ["registry/default/ui/button.tsx"],
  },
  popover: {
    name: "popover",
    size: "small",
    type: "components:ui",
    code: popoverCode,
    install: popoverInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./popover")),
    files: ["registry/default/ui/button.tsx"],
  },
  progress: {
    name: "progress",
    size: sizes.medium,
    type: "components:ui",
    code: progressCode,
    install: progressInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./progress")),
    files: ["registry/default/ui/button.tsx"],
  },
  "radio-group": {
    name: "radio-group",
    size: sizes.medium,
    type: "components:ui",
    code: radioGroupCode,
    install: radioGroupInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./radio-group")),
    files: ["registry/default/ui/button.tsx"],
  },
  "scroll-area": {
    name: "scroll-area",
    size: sizes.large,
    type: "components:ui",
    code: scrollAreaCode,
    install: scrollAreaInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./scroll-area")),
    files: ["registry/default/ui/button.tsx"],
  },
  select: {
    name: "select",
    size: "medium",
    type: "components:ui",
    code: selectCode,
    install: selectInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./select")),
    files: ["registry/default/ui/button.tsx"],
  },
  slider: {
    name: "slider",
    type: "components:ui",
    code: sliderCode,
    install: sliderInstall,
    size: "medium",
    registryDependencies: undefined,
    component: React.lazy(() => import("./slider")),
    files: ["registry/default/ui/button.tsx"],
  },
  switch: {
    name: "switch",
    type: "components:ui",
    code: switchCode,
    install: switchInstall,
    size: sizes.medium,
    registryDependencies: undefined,
    component: React.lazy(() => import("./switch")),
    files: ["registry/default/ui/button.tsx"],
  },
  tabs: {
    name: "tabs",
    type: "components:ui",
    code: tabsCode,
    install: tabsInstall,
    size: "large",

    registryDependencies: undefined,
    component: React.lazy(() => import("./tabs")),
    files: ["registry/default/ui/button.tsx"],
  },
  textarea: {
    name: "textarea",
    size: sizes.medium,
    type: "components:ui",
    code: textareaCode,
    install: textareaInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./textarea")),
    files: ["registry/default/ui/button.tsx"],
  },
  toast: {
    name: "toast",
    size: "small",
    type: "components:ui",
    code: toastCode,
    install: toastInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./toast")),
    files: ["registry/default/ui/button.tsx"],
  },
  tooltip: {
    name: "tooltip",
    size: "small",
    type: "components:ui",
    code: tooltipCode,
    install: tooltipInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./tooltip")),
    files: ["registry/default/ui/button.tsx"],
  },
  separator: {
    name: "separator",
    size: sizes.medium,
    type: "components:ui",
    code: separatorCode,
    install: separatorInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./separator")),
    files: ["registry/default/ui/button.tsx"],
  },
  table: {
    name: "table",
    size: "large",
    type: "components:ui",
    code: tableCode,
    install: tableInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./table")),
    files: ["registry/default/ui/button.tsx"],
  },
  "toggle-group": {
    name: "toggle-group",
    size: sizes.medium,
    type: "components:ui",
    code: toggleGroupCode,
    install: toggleGroupInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./toggle-group")),
    files: ["registry/default/ui/button.tsx"],
  },
  toggle: {
    name: "toggle",
    size: "small",
    type: "components:ui",
    code: toggleCode,
    install: toggleInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./toggle")),
    files: ["registry/default/ui/button.tsx"],
  },
  skeleton: {
    name: "skeleton",
    size: "medium",
    type: "components:ui",
    code: skeletonCode,
    install: skeletonInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./skeleton")),
    files: ["registry/default/ui/button.tsx"],
  },
  sheet: {
    name: "sheet",
    size: "medium",
    type: "components:ui",
    code: sheetCode,
    install: sheetInstall,
    registryDependencies: undefined,
    component: React.lazy(() => import("./sheet")),
    files: ["registry/default/ui/button.tsx"],
  },
};

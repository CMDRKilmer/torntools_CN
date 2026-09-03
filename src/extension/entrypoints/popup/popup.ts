import { mount } from "svelte";
import "@svelte/app.css";
import { mountDomTranslator } from "@extension/utils/i18n/dom-translator";
import Popup from "./Popup.svelte";

mountDomTranslator();
mount(Popup, { target: document.getElementById("app")! });

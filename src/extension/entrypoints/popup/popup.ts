import { mountDomTranslator } from "@extension/utils/i18n/dom-translator";
import "@svelte/app.css";
import { mount } from "svelte";
import Popup from "./Popup.svelte";

mountDomTranslator();
mount(Popup, { target: document.getElementById("app")! });

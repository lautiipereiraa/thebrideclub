export const THEME_STORAGE_KEY = "tema";

/**
 * Corre en el <head>, antes de pintar: si se elige el tema recién después de
 * hidratar, quien eligió oscuro ve un destello crema en cada carga.
 */
export const themeInitScript = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="oscuro")document.documentElement.dataset.theme="dark"}catch(e){}`;

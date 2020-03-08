import Vxp, { VueAdapter } from "vxp";
import vxpPluginVueAdmin from "vxp-plugin-vue-admin";

const viewAdapter = new VueAdapter();
const plugins = [ vxpPluginVueAdmin ];

new Vxp(viewAdapter).use(plugins).render("#app");

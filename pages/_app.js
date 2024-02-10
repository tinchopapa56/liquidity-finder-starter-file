import "../styles/globals.css";
import toast, {Toaster} from "react-hot-toast";

import { CONTEXT_PROVIDER } from "../context";

export default function App({ Component, pageProps }) {
  return (
    <>
    <CONTEXT_PROVIDER>
      <Component {...pageProps} />
      <Toaster />
    </CONTEXT_PROVIDER>

      <script src="assets/libs/preline/preline.js"></script>
      <script src="assets/libs/swiper/swiper-bundle.min.js"></script>
      <script src="assets/libs/gumshoejs/gumshoe.polyfills.min.js"></script>
      <script src="assets/libs/lucide/umd/lucide.min.js"></script>
      <script src="assets/libs/aos/aos.js"></script>
      <script src="assets/js/swiper.js"></script>
      <script src="assets/js/theme.js"></script>
    </>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
<header className="aks">
  <nav aria-label="Global" className="hb ma us zr zx asa dms">
    <div className="ma dgl">
      <a href="#" className="fv ars">
        <span className="t">Your Company</span>
        <img alt="" src="https://tailwindui.com/plus/img/logos/mark.svg?color=white" className="os ue"></img>
      </a>
    </div>
    <div className="ma ddw">
      <button type="button" className="fx mb zr zw aet arw azr">
        <span className="t">Open main menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="oo sw">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        </svg>
      </button>
    </div>
    <div className="mg dds diq">
      <a href="#" className="axq ayc bbv">Product</a>
      <a href="#" className="axq ayc bbv">Features</a>
      <a href="#" className="axq ayc bbv">Marketplace</a>
      <a href="#" className="axq ayc bbv">Company</a>
    </div>
    <div className="mg dds dgl dig">
      <a href="#" className="axq ayc bbv">Log in <span aria-hidden="true">→</span>
      </a>
    </div>
  </nav>
</header>
  );
}

import { DesktopMenu } from "./components/MenuDesktop";
import { MobileMenu } from "./components/MenuMobile";
import { $ } from "./utils";

$('header')?.insertAdjacentElement('afterbegin',DesktopMenu());

$('.menu--desktop')?.insertAdjacentElement('afterend',MobileMenu());
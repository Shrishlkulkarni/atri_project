import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex21Cb, useButton58Cb, useButton59Cb, useButton60Cb, useButton61Cb, useButton62Cb, useButton63Cb, useButton64Cb, useButton65Cb, useImage34Cb } from "../page-cbs/about";
import "../page-css/about.css";
import "../custom/about";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex21Props = useStore((state)=>state["about"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["about"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Button58Props = useStore((state)=>state["about"]["Button58"]);
const Button58IoProps = useIoStore((state)=>state["about"]["Button58"]);
const Button58Cb = useButton58Cb()
const Button59Props = useStore((state)=>state["about"]["Button59"]);
const Button59IoProps = useIoStore((state)=>state["about"]["Button59"]);
const Button59Cb = useButton59Cb()
const Button60Props = useStore((state)=>state["about"]["Button60"]);
const Button60IoProps = useIoStore((state)=>state["about"]["Button60"]);
const Button60Cb = useButton60Cb()
const Button61Props = useStore((state)=>state["about"]["Button61"]);
const Button61IoProps = useIoStore((state)=>state["about"]["Button61"]);
const Button61Cb = useButton61Cb()
const Button62Props = useStore((state)=>state["about"]["Button62"]);
const Button62IoProps = useIoStore((state)=>state["about"]["Button62"]);
const Button62Cb = useButton62Cb()
const Button63Props = useStore((state)=>state["about"]["Button63"]);
const Button63IoProps = useIoStore((state)=>state["about"]["Button63"]);
const Button63Cb = useButton63Cb()
const Button64Props = useStore((state)=>state["about"]["Button64"]);
const Button64IoProps = useIoStore((state)=>state["about"]["Button64"]);
const Button64Cb = useButton64Cb()
const Button65Props = useStore((state)=>state["about"]["Button65"]);
const Button65IoProps = useIoStore((state)=>state["about"]["Button65"]);
const Button65Cb = useButton65Cb()
const Image34Props = useStore((state)=>state["about"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["about"]["Image34"]);
const Image34Cb = useImage34Cb()

  return (<>
  <Flex1 className="p-about Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image1 className="p-about Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<Button1 className="p-about Button65 bpt" {...Button65Props} {...Button65Cb} {...Button65IoProps}/>
<Button1 className="p-about Button64 bpt" {...Button64Props} {...Button64Cb} {...Button64IoProps}/>
<Button1 className="p-about Button63 bpt" {...Button63Props} {...Button63Cb} {...Button63IoProps}/>
<Button1 className="p-about Button62 bpt" {...Button62Props} {...Button62Cb} {...Button62IoProps}/>
<Button1 className="p-about Button61 bpt" {...Button61Props} {...Button61Cb} {...Button61IoProps}/>
<Button1 className="p-about Button60 bpt" {...Button60Props} {...Button60Cb} {...Button60IoProps}/>
<Button1 className="p-about Button59 bpt" {...Button59Props} {...Button59Cb} {...Button59IoProps}/>
<Button1 className="p-about Button58 bpt" {...Button58Props} {...Button58Cb} {...Button58IoProps}/>
</Flex1>
  </>);
}

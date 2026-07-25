"use client";

/**
 * Tracking de conversión - Meta Pixel, TikTok Pixel, GA4
 *
 * Eventos estándar:
 *  - PageView        (al cargar)
 *  - ViewContent     (al ver el producto)
 *  - InitiateCheckout(al abrir el modal de compra)
 *  - AddToCart       (al hacer clic en CTA)
 *  - Lead            (al capturar email en exit-intent / quiz)
 *  - Purchase        (al confirmar pago - llamado desde webhook o success)
 *
 * Los IDs de pixel se leen de variables de entorno públicas:
 *  - NEXT_PUBLIC_META_PIXEL_ID
 *  - NEXT_PUBLIC_TIKTOK_PIXEL_ID
 *  - NEXT_PUBLIC_GA4_ID
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: {
      track: (event: string, params?: Record<string, unknown>) => void;
      load: (id: string) => void;
      page: () => void;
    };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

let initialized = false;

export function initTracking() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;

  // ============== META PIXEL ==============
  if (META_PIXEL_ID) {
    /* eslint-disable */
    (function (f: any, b, e, v, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    /* eslint-enable */
    window.fbq?.("init", META_PIXEL_ID);
    window.fbq?.("track", "PageView");
  }

  // ============== TIKTOK PIXEL ==============
  if (TIKTOK_PIXEL_ID) {
    /* eslint-disable */
    (function (w: any, d, t) {
      w.TiktokAnalyticsObject = t;
      var ttq = (w[t] = w[t] || []);
      ttq.methods = [
        "page", "track", "identify", "instances", "debug", "on", "off",
        "once", "ready", "alias", "group", "enableCookie", "disableCookie",
      ];
      ttq.setAndDefer = function (t: any, e: any) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (t: any) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e;
      };
      ttq.load = function (e: any, n?: any) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {};
        ttq._i[e] = [];
        ttq._i[e]._u = i;
        ttq._t = ttq._t || {};
        ttq._t[e] = +new Date();
        ttq._o = ttq._o || {};
        ttq._o[e] = n || {};
        var o = d.createElement("script");
        o.type = "text/javascript";
        o.async = !0;
        o.src = i + "?sdkid=" + e + "&lib=" + t;
        var a = d.getElementsByTagName("script")[0];
        if (a && a.parentNode) a.parentNode.insertBefore(o, a);
        else d.head.appendChild(o);
      };
      ttq.load(TIKTOK_PIXEL_ID);
      ttq.page();
    })(window, document, "ttq");
    /* eslint-enable */
  }

  // ============== GA4 ==============
  if (GA4_ID) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { send_page_view: true });
  }
}

type TrackEvent =
  | "ViewContent"
  | "InitiateCheckout"
  | "AddToCart"
  | "Lead"
  | "Purchase"
  | "CompleteRegistration";

interface EventParams {
  value?: number;
  currency?: string;
  content_name?: string;
  content_ids?: string[];
  content_type?: string;
  email?: string;
  [key: string]: unknown;
}

export function trackEvent(event: TrackEvent, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const value = params.value ?? 30;
  const currency = params.currency ?? "PEN";
  const base = {
    value,
    currency,
    content_name: params.content_name ?? "Guía Saber Peruano",
    content_ids: params.content_ids ?? ["guia-saber-peruano-cuerpo-saludable"],
    content_type: "product",
  };

  // Meta Pixel
  if (window.fbq) {
    const metaEventMap: Record<TrackEvent, string> = {
      ViewContent: "ViewContent",
      InitiateCheckout: "InitiateCheckout",
      AddToCart: "AddToCart",
      Lead: "Lead",
      Purchase: "Purchase",
      CompleteRegistration: "CompleteRegistration",
    };
    window.fbq("track", metaEventMap[event], base);
  }

  // TikTok Pixel
  if (window.ttq) {
    const tiktokEventMap: Record<TrackEvent, string> = {
      ViewContent: "ViewContent",
      InitiateCheckout: "InitiateCheckout",
      AddToCart: "AddToCart",
      Lead: "SubmitForm",
      Purchase: "CompletePayment",
      CompleteRegistration: "CompleteRegistration",
    };
    window.ttq.track(tiktokEventMap[event], base);
  }

  // GA4
  if (window.gtag) {
    const ga4EventMap: Record<TrackEvent, string> = {
      ViewContent: "view_item",
      InitiateCheckout: "begin_checkout",
      AddToCart: "add_to_cart",
      Lead: "generate_lead",
      Purchase: "purchase",
      CompleteRegistration: "sign_up",
    };
    window.gtag("event", ga4EventMap[event], {
      value,
      currency,
      items: [{ item_id: base.content_ids[0], item_name: base.content_name }],
    });
  }
}

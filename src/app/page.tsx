"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { useCountdown } from "@/hooks/use-countdown";
import { initTracking, trackEvent } from "@/lib/tracking";
import { ExitIntentPopup } from "@/components/sections/exit-intent-popup";
import { SocialProofNotifications } from "@/components/sections/social-proof-notifications";
import { QuizModal } from "@/components/sections/quiz-modal";
import { QuizCTASection } from "@/components/sections/quiz-cta-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { GuaranteeBadgeSection } from "@/components/sections/guarantee-badge-section";
import {
  Flame,
  Clock,
  CheckCircle2,
  Star,
  Shield,
  Download,
  Lock,
  Zap,
  Heart,
  Apple,
  Dumbbell,
  Moon,
  Droplets,
  PartyPopper,
  TrendingDown,
  Gift,
  ChevronDown,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Award,
  Users,
  Sparkles,
  ChefHat,
  Brain,
  ShoppingCart,
  FileText,
  Calendar,
  Ruler,
  Quote,
} from "lucide-react";

// ============================================================
// DATOS
// ============================================================
const chapters = [
  {
    n: "01",
    title: "Mentalidad y hábitos",
    desc: "Los 7 hábitos que cambian tu relación con la comida para siempre. Sin dietas extremas, sin culpa, sin sufrimiento.",
    icon: Brain,
  },
  {
    n: "02",
    title: "Lista de compras inteligente",
    desc: "Tabla de alimentos permitidos, moderados y prohibidos. Lista semanal con precios reales en soles (gasta solo S/100/semana).",
    icon: ShoppingCart,
  },
  {
    n: "03",
    title: "Plan de alimentación 21 días",
    desc: "21 días de menús completos: desayuno, snacks, almuerzo y cena. Sin pensar qué cocinar, solo seguir el plan.",
    icon: Calendar,
  },
  {
    n: "04",
    title: "Recetas peruanas hackeadas",
    desc: "Lomo saltado, ají de gallina, ceviche, causa, arroz con pollo, seco... en versión ligera. Mismo sabor, menos calorías.",
    icon: ChefHat,
  },
  {
    n: "05",
    title: "Estilo de vida",
    desc: "Rutinas de ejercicio en casa (sin gimnasio), reglas de oro del sueño y guía de hidratación.",
    icon: Dumbbell,
  },
  {
    n: "06",
    title: "Antojos y fiestas",
    desc: "Cómo sobrevivir a cumpleaños, pollerías, chifas y reuniones sin sentir culpa ni engordar.",
    icon: PartyPopper,
  },
  {
    n: "BONUS",
    title: "Tracking de progreso + IMC",
    desc: "Calculadora de IMC, fórmula de calorías objetivo, tablas de seguimiento y diario emocional imprimible.",
    icon: TrendingDown,
  },
];

const testimonials = [
  {
    name: "María Luz Quispe",
    age: 38,
    city: "Comas, Lima",
    initial: "-7 kg",
    text: "Probé de todo: pastillas, dietas de internet, gym. Nada funcionaba. Con esta guía bajé 7 kilos en 2 meses sin dejar de comer mi ceviche los domingos. Lo mejor: aprendí a cocinar más liviano para toda mi familia.",
    stars: 5,
    emoji: "👩",
  },
  {
    name: "Carlos Mendoza",
    age: 45,
    city: "Trujillo",
    initial: "-12 kg",
    text: "Soy ingeniero, trabajo 10 horas al día, no tengo tiempo para gym ni para cocinar fancy. Esta guía me enseñó a preparar mi lunch en 10 minutos y a caminar en la hora de almuerzo. 12 kilos menos y mi colesterol volvió a la normalidad.",
    stars: 5,
    emoji: "👨",
  },
  {
    name: "Rosa María Vásquez",
    age: 52,
    city: "Arequipa",
    initial: "-9 kg",
    text: "Tenía 50 años, 90 kilos y pre-diabetes. Mi médico me dijo que cambiara o iba a terminar con pastillas. Compré la guía, la seguí con disciplina, y en 3 meses bajé 9 kilos. Mi médico quedó sorprendido. Hoy camino, duermo mejor y juego con mis nietos.",
    stars: 5,
    emoji: "👵",
  },
  {
    name: "José Antonio Ríos",
    age: 29,
    city: "Surco, Lima",
    initial: "-5 kg",
    text: "La parte de recetas hackeadas es ORO. Hago el lomo saltado ligero 2 veces por semana y ni siento que estoy a dieta. El plan de 21 días me enseñó a organizarme. Bajé 5 kilos en el primer mes sin pasar hambre.",
    stars: 5,
    emoji: "🧑",
  },
  {
    name: "Patricia Salazar",
    age: 34,
    city: "Piura",
    initial: "-8 kg",
    text: "Lo que más me gustó es que no me prohibió nada. Aprendí a elegir mejor en el mercado, a controlar las porciones y a no sentir culpa cuando me salgo del plan. 8 kilos menos y, sobre todo, paz mental con la comida.",
    stars: 5,
    emoji: "👩‍🦰",
  },
  {
    name: "Eduardo Flores",
    age: 41,
    city: "Chiclayo",
    initial: "-15 kg",
    text: "Engordé 20 kilos después de la pandemia. Probé esta guía por curiosidad y fue lo mejor que pude hacer. Las recetas son fáciles, los ingredientes baratos, y los resultados llegaron solos. 15 kilos en 4 meses. Mi esposa también la siguió y bajó 6.",
    stars: 5,
    emoji: "👨‍🦱",
  },
];

const faqs = [
  {
    q: "¿Es una dieta extrema? ¿Voy a pasar hambre?",
    a: "Para nada. La guía está diseñada para que comas rico, abundante y nutritivo. La idea NO es pasar hambre, sino elegir mejor. Las porciones son reales y los menús tienen snacks entre comidas. Si pasas hambre, no estás siguiendo el plan correctamente.",
  },
  {
    q: "¿Necesito comprar alimentos caros o difíciles de encontrar?",
    a: "No. Toda la guía está basada en ingredientes que encuentras en cualquier mercado del Perú: pollo, pescado fresco, huevo, verduras, frutas de temporada, quinua, menestras, ají. La lista de compras semanal cuesta aprox. S/100 (unos S/14-17 al día por persona).",
  },
  {
    q: "¿En qué formato recibo la guía?",
    a: "Recibes dos archivos descargables de inmediato: un PDF listo para imprimir o leer en cualquier dispositivo, y un DOCX editable por si quieres personalizar tus menús o imprimir solo algunas páginas. Sin esperas, sin envíos, sin suscripciones.",
  },
  {
    q: "¿Cuánto voy a bajar de peso?",
    a: "No te prometemos resultados mágicos porque sería mentirte. La pérdida de peso saludable es de 0.5 a 1 kg por semana. Si sigues el plan con constancia, en 21 días puedes esperar perder entre 1.5 y 3 kilos, y sentirte con mucha más energía. Los resultados varían según tu peso inicial, metabolismo y constancia.",
  },
  {
    q: "¿Tengo alguna condición médica. ¿Puedo hacer este plan?",
    a: "Si tienes diabetes, hipertensión, estás embarazada o tomas medicación, debes consultar con tu médico antes de empezar. La guía incluye un descargo médico completo y los menús son generales (no personalizados). Para casos específicos, te recomendamos buscar un nutricionista colegiado.",
  },
  {
    q: "¿Cómo funciona el pago con MercadoPago?",
    a: "Al hacer clic en 'Comprar ahora', serás redirigida(o) a MercadoPago (Checkout Pro), donde puedes pagar con Yape, Plin, tarjeta de crédito/débito, transferencia o efectivo en agencias. Es 100% seguro y encriptado. Una vez aprobado el pago, recibes automáticamente el acceso a los archivos.",
  },
  {
    q: "¿Hay garantía de devolución?",
    a: "Sí. Tienes 7 días de garantía total. Si compras la guía, la revisas y sientes que no es para ti, escríbenos y te devolvemos el 100% de tu dinero, sin preguntas ni condiciones. Estamos tan seguros del valor que entregamos que asumimos todo el riesgo.",
  },
  {
    q: "¿Por cuánto tiempo tengo acceso?",
    a: "Para siempre. Descargas los archivos una vez y son tuyos de por vida. Puedes volver a ellos cuando quieras, imprimirlos, compartirlos con tu familia (no revenderlos). Sin pagos mensuales, sin suscripciones, sin fechas de vencimiento.",
  },
];

const stats = [
  { value: "11", label: "Capítulos completos", icon: FileText },
  { value: "21", label: "Días de menús diarios", icon: Calendar },
  { value: "40+", label: "Recetas y tablas", icon: ChefHat },
  { value: "12K+", label: "Personas transformadas", icon: Users },
];

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export default function Home() {
  const { timeLeft, mounted } = useCountdown(24);
  const { toast } = useToast();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(37);
  const [showSticky, setShowSticky] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  // ============== TRACKING INICIALIZACIÓN ==============
  useEffect(() => {
    initTracking();
    // Disparar ViewContent al cargar
    trackEvent("ViewContent", { value: 30, currency: "PEN" });
  }, []);

  // Efecto: barra sticky aparece después del hero
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto: simular spots restantes bajando lentamente
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev <= 12) return prev;
        return prev - 1;
      });
    }, 45000); // cada 45 segundos baja 1
    return () => clearInterval(interval);
  }, []);

  const scrollToCheckout = () => {
    trackEvent("AddToCart", { value: 30, currency: "PEN" });
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const openCheckout = () => {
    trackEvent("InitiateCheckout", { value: 30, currency: "PEN" });
    setCheckoutOpen(true);
  };

  const openQuiz = () => {
    setQuizOpen(true);
  };

  const handleExitIntentClaimed = (emailValue: string, coupon: string) => {
    setEmail(emailValue);
    setCouponCode(coupon);
    toast({
      title: "🎁 Cupón activado",
      description: "Tu 10% extra se aplicará automáticamente en el checkout.",
      duration: 5000,
    });
  };

  const handleCheckout = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Email requerido",
        description: "Necesitamos tu correo para enviarte la guía.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: name,
          customerEmail: email,
          coupon: couponCode,
        }),
      });
      const data = await res.json();

      if (!data.ok) {
        throw new Error(data.error || "Error en el checkout");
      }

      // En producción: redirigir a MercadoPago
      // Si hay init_point (real), redirige. Si no (demo), muestra toast.
      if (data.init_point && !data.init_point.includes("DEMO")) {
        // Marcar conversión de checkout iniciado
        if (typeof window !== "undefined") {
          sessionStorage.setItem("nps_purchased_v1", "1");
        }
        window.location.href = data.init_point;
      } else {
        // Modo demo: simular compra para testing de tracking
        trackEvent("Purchase", {
          value: couponCode ? 27 : 30,
          currency: "PEN",
          email,
        });
        if (typeof window !== "undefined") {
          sessionStorage.setItem("nps_purchased_v1", "1");
        }
        toast({
          title: "✅ Checkout Pro listo (demo)",
          description:
            "En producción serías redirigida(o) a MercadoPago para pagar S/30 con Yape, Plin, tarjeta o efectivo. Configura MERCADO_PAGO_ACCESS_TOKEN para activarlo.",
          duration: 8000,
        });
        setCheckoutOpen(false);
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "No se pudo iniciar el pago. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Si está en URL el parámetro status=success, mostrar toast + Purchase event
  useEffect(() => {
    const url = new URL(window.location.href);
    const status = url.searchParams.get("status");
    if (status === "success") {
      trackEvent("Purchase", {
        value: couponCode ? 27 : 30,
        currency: "PEN",
        email,
      });
      if (typeof window !== "undefined") {
        sessionStorage.setItem("nps_purchased_v1", "1");
      }
      toast({
        title: "¡Pago aprobado! 🎉",
        description: "Revisa tu correo para descargar la guía.",
        duration: 10000,
      });
      // Limpiar param de URL
      url.searchParams.delete("status");
      window.history.replaceState({}, "", url.toString());
    }
  }, [toast, email, couponCode]);

  return (
    <div className="min-h-screen flex flex-col bg-orange-50/40">
      {/* ===== BARRA SUPERIOR DE OFERTA FLASH ===== */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white text-center py-2 px-4 text-sm font-bold tracking-wide animate-pulse">
        <Flame className="inline h-4 w-4 mr-1.5 mb-0.5" />
        OFERTA FLASH 90% OFF · TERMINA EN{" "}
        {mounted && (
          <span className="font-mono">
            {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        )}
      </div>

      {/* ===== HERO ===== */}
      <HeroSection
        timeLeft={timeLeft}
        mounted={mounted}
        onBuy={scrollToCheckout}
        spotsLeft={spotsLeft}
      />

      {/* ===== STATS BAR ===== */}
      <StatsBar />

      {/* ===== PROBLEMA / SOLUCIÓN ===== */}
      <ProblemSection />

      {/* ===== TEST DE METABOLISMO (lead magnet) ===== */}
      <QuizCTASection onOpenQuiz={openQuiz} />

      {/* ===== BENEFICIOS ===== */}
      <BenefitsSection />

      {/* ===== COMPARACIÓN: dietas tradicionales vs nuestra guía ===== */}
      <ComparisonSection />

      {/* ===== CONTENIDO DE LA GUÍA ===== */}
      <ContentSection />

      {/* ===== BONUS ULTRA PRO ===== */}
      <BonusSection onBuy={scrollToCheckout} />

      {/* ===== TRANSFORMACIONES REALES ===== */}
      <TestimonialsSection />

      {/* ===== PRECIO / OFERTA ===== */}
      <PriceSection onBuy={openCheckout} timeLeft={timeLeft} mounted={mounted} spotsLeft={spotsLeft} ctaRef={ctaRef} />

      {/* ===== GARANTÍA REFORZADA ===== */}
      <GuaranteeBadgeSection />

      {/* ===== FAQ ===== */}
      <FaqSection />

      {/* ===== ÚLTIMO CTA ===== */}
      <FinalCtaSection onBuy={openCheckout} timeLeft={timeLeft} mounted={mounted} />

      {/* ===== FOOTER ===== */}
      <FooterSection />

      {/* ===== POPUP DE SALIDA (exit-intent) ===== */}
      <ExitIntentPopup onClaimed={handleExitIntentClaimed} />

      {/* ===== NOTIFICACIONES SOCIALES DE COMPRA ===== */}
      <SocialProofNotifications />

      {/* ===== MODAL DEL TEST DE METABOLISMO ===== */}
      <QuizModal open={quizOpen} onOpenChange={setQuizOpen} onBuy={openCheckout} />

      {/* ===== STICKY CTA BAR ===== */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t-2 border-orange-500 px-4 py-3 md:py-4 animate-in slide-in-from-bottom duration-300">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-orange-600 font-bold flex items-center gap-1.5">
                <Flame className="h-3 w-3" /> OFERTA TERMINA EN{" "}
                {mounted && (
                  <span className="font-mono">
                    {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                )}
              </p>
              <p className="text-sm md:text-base font-bold text-gray-900 truncate">
                <span className="text-gray-400 line-through font-normal">S/300</span>{" "}
                <span className="text-orange-600">{couponCode ? "S/27" : "S/30"}</span>{" "}
                {couponCode && (
                  <span className="hidden md:inline text-green-600 font-bold text-xs ml-1">
                    · 🎁 cupón {couponCode} activo
                  </span>
                )}
                {!couponCode && (
                  <span className="hidden md:inline text-gray-600 font-normal text-sm">· Acceso inmediato</span>
                )}
              </p>
            </div>
            <Button
              onClick={openCheckout}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-4 md:px-8 py-3 md:py-4 rounded-full shadow-lg shadow-orange-500/40 whitespace-nowrap"
            >
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2" />
              COMPRAR AHORA
            </Button>
          </div>
        </div>
      )}

      {/* ===== MODAL CHECKOUT ===== */}
      <AlertDialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="text-center mb-2">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-red-100 mb-3">
                <Lock className="h-8 w-8 text-orange-600" />
              </div>
              <AlertDialogTitle className="text-2xl text-gray-900">
                Finaliza tu compra segura
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-600 mt-2">
                Pago procesado por <strong className="text-gray-900">MercadoPago</strong>. Tus datos están 100% protegidos.
              </AlertDialogDescription>
            </div>
          </AlertDialogHeader>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 my-2 text-center">
            <p className="text-xs text-gray-500 line-through">Precio regular: S/300</p>
            <p className="text-3xl font-black text-orange-600">
              {couponCode ? "S/27" : "S/30"}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {couponCode ? (
                <>
                  Ahorras S/273 (90% OFF + 10% extra cupón{" "}
                  <span className="font-mono font-bold text-green-700">{couponCode}</span>)
                </>
              ) : (
                "Ahorras S/270 (90% OFF)"
              )}
            </p>
          </div>

          <div className="space-y-3 py-2">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Nombre (opcional)
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Correo electrónico <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@gmail.com"
                className="mt-1"
                required
              />
              <p className="text-xs text-gray-500 mt-1">La guía llegará a este correo en PDF + DOCX.</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 my-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-green-600" /> SSL Seguro
            </span>
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3 text-green-600" /> Encriptado
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" /> Garantía 7 días
            </span>
          </div>

          <AlertDialogFooter className="flex-col gap-2">
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                handleCheckout();
              }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg shadow-orange-500/40 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  Procesando...
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5 mr-2" />
                  PAGAR {couponCode ? "S/27" : "S/30"} CON MERCADOPAGO
                </>
              )}
            </AlertDialogAction>
            <p className="text-center text-xs text-gray-500">
              Acepta Yape · Plin · Visa · Mastercard · Efectivo
            </p>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// ============================================================
// SECCIÓN HERO
// ============================================================
function HeroSection({ timeLeft, mounted, onBuy, spotsLeft }: any) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-10 left-10 text-9xl">🥑</div>
        <div className="absolute top-32 right-20 text-8xl">🍅</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🌽</div>
        <div className="absolute bottom-32 right-1/3 text-9xl">🐟</div>
        <div className="absolute top-1/2 left-1/2 text-8xl">🥗</div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna izquierda: texto */}
          <div className="text-center lg:text-left">
            {/* Badge de oferta */}
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-red-500/30">
              <Flame className="h-4 w-4 animate-pulse" />
              OFERTA FLASH · 90% DESCUENTO
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Baja de peso comiendo{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                peruano, rico y barato
              </span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
              La guía completa de{" "}
              <strong className="text-gray-900">21 días</strong> con recetas
              hackeadas de lomo saltado, ceviche, ají de gallina... en versión
              saludable. Sin dietas extremas. Sin ingredientes caros. Sin
              sufrimiento.
            </p>

            {/* Countdown */}
            <div className="mt-8 inline-flex flex-col items-center lg:items-start gap-2">
              <p className="text-sm font-semibold text-red-600 flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                LA OFERTA TERMINA EN:
              </p>
              <div className="flex gap-2 md:gap-3">
                <TimeBlock value={mounted ? timeLeft.hours : 24} label="HORAS" />
                <span className="text-4xl md:text-5xl font-black text-gray-300 self-start">:</span>
                <TimeBlock value={mounted ? timeLeft.minutes : 0} label="MIN" />
                <span className="text-4xl md:text-5xl font-black text-gray-300 self-start">:</span>
                <TimeBlock value={mounted ? timeLeft.seconds : 0} label="SEG" />
              </div>
            </div>

            {/* Precio + CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
              <div className="text-left">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl text-gray-400 line-through font-medium">S/300</span>
                  <span className="text-5xl md:text-6xl font-black text-orange-600">S/30</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Ahorras <strong className="text-green-600">S/270 (90%)</strong> · Acceso inmediato
                </p>
              </div>
            </div>

            <Button
              onClick={onBuy}
              className="mt-6 w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 rounded-full shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all hover:scale-105"
            >
              <ShoppingCart className="h-6 w-6 mr-2" />
              QUIERO MI GUÍA AHORA
            </Button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-gray-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-600" /> Pago 100% seguro
              </span>
              <span className="flex items-center gap-1.5">
                <Download className="h-4 w-4 text-green-600" /> Descarga inmediata
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-green-600" /> Garantía 7 días
              </span>
            </div>

            {/* Urgencia spots */}
            <div className="mt-5 inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-4 py-2 rounded-full text-sm text-orange-800">
              <Users className="h-4 w-4" />
              <span>
                Quedan <strong className="font-bold">{spotsLeft} cupos</strong> a este precio
              </span>
            </div>
          </div>

          {/* Columna derecha: imagen/portada */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Mockup del ebook */}
              <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl shadow-2xl p-8 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Decoración superior */}
                <div className="text-center mb-4">
                  <p className="text-xs font-bold tracking-widest text-orange-600">
                    GUÍA COMPLETA
                  </p>
                  <div className="w-16 h-0.5 bg-orange-400 mx-auto mt-1.5" />
                </div>

                {/* Título mock */}
                <h2 className="text-center text-3xl md:text-4xl font-black text-red-700 leading-tight">
                  SABER PERUANO
                </h2>
                <p className="text-center text-lg md:text-xl font-bold text-orange-700 mt-1">
                  CUERPO SALUDABLE
                </p>

                {/* Decoración central */}
                <div className="text-center my-6 text-5xl">
                  🇵🇪 🍅 🥑 🌽 🐟
                </div>

                <p className="text-center text-sm text-gray-700 italic px-4">
                  Tu guía de 21 días para bajar de peso comiendo rico, barato y con sabor a casa
                </p>

                {/* Sello de oferta */}
                <div className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full h-20 w-20 flex flex-col items-center justify-center text-center shadow-xl rotate-12">
                  <span className="text-[10px] font-bold leading-none">SOLO</span>
                  <span className="text-xl font-black leading-none mt-1">S/30</span>
                  <span className="text-[9px] leading-none mt-0.5">90% OFF</span>
                </div>
              </div>

              {/* Sello de garantía */}
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white rounded-full h-24 w-24 flex flex-col items-center justify-center text-center shadow-xl -rotate-6 hidden md:flex">
                <Shield className="h-6 w-6" />
                <span className="text-[10px] font-bold mt-1">GARANTÍA</span>
                <span className="text-xs font-black">7 DÍAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper: TimeBlock
function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-xl px-3 md:px-4 py-2 md:py-3 min-w-[60px] md:min-w-[80px] text-center shadow-lg">
      <div className="text-2xl md:text-4xl font-black font-mono tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[9px] md:text-[10px] font-semibold text-gray-400 mt-0.5">
        {label}
      </div>
    </div>
  );
}

// ============================================================
// STATS BAR
// ============================================================
function StatsBar() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="h-7 w-7 md:h-8 md:w-8 mx-auto mb-2 opacity-80" />
              <div className="text-3xl md:text-5xl font-black">{stat.value}</div>
              <div className="text-xs md:text-sm font-medium opacity-90 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROBLEMA / SOLUCIÓN
// ============================================================
function ProblemSection() {
  const problems = [
    {
      emoji: "💸",
      title: "Dietas que no son para Perú",
      desc: "Te dicen que comas kale y aguacate importado, cuando en tu mercado ni siquiera existen o están carísimos.",
    },
    {
      emoji: "😤",
      title: "Prohiben lo que amas",
      desc: "Te quitan el arroz, la papa, el pan, el ají. Y cuando te prohiben lo que amas, terminas rindiéndote y comiendo el doble.",
    },
    {
      emoji: "⏰",
      title: "No toman en cuenta tu vida",
      desc: "No consideran la olla de la abuela, el almuerzo en familia, el pollo a la brasa del domingo. Dietas pensadas para otros países.",
    },
    {
      emoji: "🔄",
      title: "Efecto rebote",
      desc: "Pierdes peso sufriendo, lo recuperas en una semana y encima con intereses. La trampa de las dietas extremas.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            ¿POR QUÉ NO HAS PODIDO BAJAR DE PESO?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Las dietas tradicionales están{" "}
            <span className="text-red-600">diseñadas para fracasar</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Si has probado de todo y nada te funciona, no es tu culpa. Es que las dietas que te venden no fueron hechas para nosotros, los peruanos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Solución */}
        <div className="mt-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🇵🇪</div>
          <h3 className="text-2xl md:text-4xl font-black mb-4">
            La solución es el Perú mismo
          </h3>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            Tenemos una de las cocinas más ricas, variadas y nutritivas del mundo. Quinua, kiwicha, papa, aguaymanto, pescado fresco, menestras. <strong>El problema no es la comida peruana, es cómo la hemos estado preparando.</strong> Esta guía te enseña a comer mejor lo que ya tienes a la mano.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// BENEFICIOS
// ============================================================
function BenefitsSection() {
  const benefits = [
    { icon: ChefHat, title: "Recetas hackeadas", desc: "Lomo saltado, ají de gallina, ceviche, causa... en versión ligera con menos calorías y más nutrientes." },
    { icon: ShoppingCart, title: "Lista de compras con precios", desc: "Tabla completa con precios reales en soles. Gasta solo S/100 por semana y come saludable." },
    { icon: Calendar, title: "Plan de 21 días sin pensar", desc: "Menús diarios completos: desayuno, snacks, almuerzo y cena. Solo sigue el plan." },
    { icon: TrendingDown, title: "Sin dietas extremas", desc: "Sin pasar hambre, sin prohibiciones, sin culpa. Hábitos sostenibles para toda la vida." },
    { icon: Dumbbell, title: "Sin gimnasio", desc: "Rutinas de 30 minutos en casa, sin equipo. Solo tu cuerpo y voluntad." },
    { icon: Heart, title: "Mejor salud general", desc: "Más energía, mejor digestión, mejor sueño, menos antojos. No solo bajar de peso." },
    { icon: Brain, title: "Cambio de mentalidad", desc: "Adiós a la culpa y al 'mañana empiezo'. Hábitos y estrategias para no abandonar." },
    { icon: Shield, title: "Sano y seguro", desc: "Sin suplementos caros, sin pastillas, sin métodos peligrosos. Solo comida real." },
  ];

  return (
    <section className="py-16 md:py-24 bg-orange-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            ✨ LO QUE VAS A LOGRAR
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            8 beneficios que vas a notar{" "}
            <span className="text-orange-600">en las primeras 2 semanas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-orange-100"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 mb-4">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTENIDO DE LA GUÍA
// ============================================================
function ContentSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            📚 EL CONTENIDO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Todo lo que incluye tu guía de{" "}
            <span className="text-orange-600">40+ páginas</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            11 capítulos prácticos, listos para aplicar desde el día 1. Sin teoría inútil, solo lo que funciona.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {chapters.map((chapter, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-black text-lg shadow-lg">
                  {chapter.n}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <chapter.icon className="h-4 w-4 text-orange-600" />
                  <h3 className="font-bold text-gray-900 text-lg">{chapter.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{chapter.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabla resumen de calorías */}
        <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 text-white">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-2">
            Ejemplo: calorías que vas a ahorrar
          </h3>
          <p className="text-center text-gray-400 mb-6 text-sm">
            Mismo sabor, menos calorías. Así de simple.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { plato: "Lomo saltado", antes: 700, despues: 380, emoji: "🥩" },
              { plato: "Ají de gallina", antes: 580, despues: 320, emoji: "🍲" },
              { plato: "Causa limeña", antes: 480, despues: 290, emoji: "🥔" },
            ].map((r, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center">
                <div className="text-4xl mb-2">{r.emoji}</div>
                <p className="font-bold text-lg">{r.plato}</p>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <div>
                    <p className="text-xs text-gray-400">Antes</p>
                    <p className="text-red-400 line-through font-bold">{r.antes} kcal</p>
                  </div>
                  <span className="text-orange-400 text-2xl">→</span>
                  <div>
                    <p className="text-xs text-gray-400">Ahora</p>
                    <p className="text-green-400 font-black text-xl">{r.despues} kcal</p>
                  </div>
                </div>
                <p className="text-xs text-green-400 mt-2 font-bold">
                  Ahorras {r.antes - r.despues} kcal por plato
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// BONUS ULTRA PRO
// ============================================================
function BonusSection({ onBuy }: { onBuy: () => void }) {
  const bonuses = [
    {
      icon: TrendingDown,
      title: "BONUS #1: Sistema completo de tracking",
      desc: "Tabla de seguimiento de 90 días, tracker de hábitos diarios y diario emocional. Para imprimir y usar hoy mismo.",
      value: "S/50",
      tag: "Printable",
    },
    {
      icon: Ruler,
      title: "BONUS #2: Calculadora de IMC y calorías",
      desc: "Tabla de IMC lista para usar, fórmula de calorías objetivo paso a paso y guía de medidas corporales.",
      value: "S/40",
      tag: "Herramienta",
    },
    {
      icon: ChefHat,
      title: "BONUS #3: 9 recetas extra",
      desc: "Panqueques de avena, omelette de verduras, sopa reconfortante, y 6 recetas más no incluidas en el plan principal.",
      value: "S/60",
      tag: "Recetas",
    },
    {
      icon: FileText,
      title: "BONUS #4: Versión DOCX editable",
      desc: "Además del PDF, recibes la versión Word editable. Personaliza tus menús, imprime solo lo que necesitas, comparte con tu familia.",
      value: "S/30",
      tag: "Editable",
    },
    {
      icon: PartyPopper,
      title: "BONUS #5: Guía de fiestas y restaurantes",
      desc: "Cómo elegir en pollerías, chifas, cevicherías y menús de S/10 sin arruinar tu progreso. Estrategias para sobrevivir reuniones.",
      value: "S/40",
      tag: "Vida real",
    },
    {
      icon: Phone,
      title: "BONUS #6: Soporte por WhatsApp",
      desc: "Acceso a grupo privado de WhatsApp con la comunidad + 1 consulta personal con el equipo de nutrición por correo.",
      value: "S/80",
      tag: "Comunidad",
    },
  ];

  const totalBonus = bonuses.reduce((sum, b) => sum + parseInt(b.value.replace("S/", "")), 0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 text-9xl">🎁</div>
        <div className="absolute bottom-20 right-1/4 text-9xl">⭐</div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-4 shadow-lg shadow-orange-500/30">
            <Sparkles className="h-4 w-4" />
            BONUS ULTRA PRO · VALOR DE S/{totalBonus}
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Pero eso no es todo...
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Te llevas 6 BONUS EXCLUSIVOS
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Si compras HOY, te llevas estos 6 regalos que por separado valen más que toda la guía junta. <strong>Totalmente GRATIS.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4 text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                {b.tag}
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 mb-4">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{b.desc}</p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-400">Valor real:</span>
                <span className="text-lg font-black text-yellow-400 line-through">{b.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Suma total */}
        <div className="mt-10 max-w-2xl mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-center shadow-2xl">
          <p className="text-lg opacity-90">Valor total de los bonus</p>
          <p className="text-5xl md:text-6xl font-black my-2">S/{totalBonus}</p>
          <p className="text-lg font-bold">
            Hoy te los llevas GRATIS al comprar la guía
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TESTIMONIOS
// ============================================================
function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            ⭐ HISTORIAS REALES
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Más de 12,000 peruanos ya{" "}
            <span className="text-orange-600">transformaron su cuerpo</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">basado en 3,247 reseñas</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-black">
                  {t.initial}
                </div>
              </div>

              <Quote className="h-6 w-6 text-orange-300 mb-2" />

              <p className="text-sm text-gray-700 leading-relaxed flex-1 italic">"{t.text}"</p>

              <div className="mt-4 pt-4 border-t border-orange-100 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-xl">
                  {t.emoji}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.age} años · {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-orange-50 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-orange-600">96%</div>
            <p className="text-sm text-gray-700 mt-1">
              de nuestros clientes recomendaría la guía
            </p>
          </div>
          <div className="bg-red-50 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-red-600">7.2 kg</div>
            <p className="text-sm text-gray-700 mt-1">
              promedio de pérdida en 8 semanas
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-green-600">4.9/5</div>
            <p className="text-sm text-gray-700 mt-1">
              calificación promedio de satisfacción
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PRECIO / OFERTA
// ============================================================
function PriceSection({ onBuy, timeLeft, mounted, spotsLeft, ctaRef }: any) {
  return (
    <section ref={ctaRef} className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-6 px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold mb-3">
              <Flame className="h-4 w-4 animate-pulse" />
              OFERTA FLASH · 90% DE DESCUENTO
            </div>
            <h2 className="text-3xl md:text-4xl font-black">
              Acceso inmediato a la guía completa
            </h2>
            <p className="opacity-90 mt-2">
              PDF + DOCX + 6 BONUS · Por solo S/30 en lugar de S/300
            </p>
          </div>

          {/* Body */}
          <div className="p-6 md:p-10">
            {/* Countdown */}
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-red-600 flex items-center justify-center gap-1.5 mb-2">
                <Clock className="h-4 w-4" />
                LA OFERTA TERMINA EN:
              </p>
              <div className="flex justify-center gap-2 md:gap-3">
                <TimeBlock value={mounted ? timeLeft.hours : 24} label="HORAS" />
                <span className="text-4xl md:text-5xl font-black text-gray-300 self-start">:</span>
                <TimeBlock value={mounted ? timeLeft.minutes : 0} label="MIN" />
                <span className="text-4xl md:text-5xl font-black text-gray-300 self-start">:</span>
                <TimeBlock value={mounted ? timeLeft.seconds : 0} label="SEG" />
              </div>
            </div>

            {/* Incluido */}
            <div className="bg-orange-50 rounded-2xl p-6 mb-6">
              <p className="font-bold text-gray-900 mb-4 text-center">✅ TODO ESTÁ INCLUIDO:</p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Guía completa de 40+ páginas (PDF)",
                  "Versión editable Word (DOCX)",
                  "Plan de 21 días con menús diarios",
                  "9 recetas peruanas hackeadas",
                  "Lista de compras con precios en soles",
                  "Tablas de alimentos permitidos/prohibidos",
                  "Rutinas de ejercicio en casa",
                  "Bonus #1: Sistema de tracking imprimible",
                  "Bonus #2: Calculadora IMC y calorías",
                  "Bonus #3: 9 recetas extra",
                  "Bonus #4: Versión DOCX editable",
                  "Bonus #5: Guía de fiestas y restaurantes",
                  "Bonus #6: Soporte por WhatsApp",
                  "Garantía de devolución 7 días",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Precio */}
            <div className="text-center mb-6">
              <p className="text-gray-500 text-sm">Precio regular</p>
              <p className="text-2xl text-gray-400 line-through font-bold">S/300</p>
              <p className="text-gray-700 mt-2 text-sm">Hoy solo pagas</p>
              <div className="flex items-baseline justify-center gap-2 mt-1">
                <span className="text-6xl md:text-7xl font-black text-orange-600">S/30</span>
                <span className="text-xl text-gray-600">one-time</span>
              </div>
              <p className="text-green-600 font-bold mt-2">
                ¡Ahorras S/270 (90% OFF)!
              </p>
            </div>

            {/* Urgencia */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center mb-6">
              <p className="text-sm text-red-700">
                <Users className="inline h-4 w-4 mr-1 mb-0.5" />
                Quedan solo <strong className="font-black">{spotsLeft} cupos</strong> a este precio. Después sube a S/300.
              </p>
            </div>

            {/* CTA */}
            <Button
              onClick={onBuy}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black text-xl md:text-2xl py-8 rounded-full shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all hover:scale-[1.02]"
            >
              <ShoppingCart className="h-7 w-7 mr-3" />
              COMPRAR AHORA · S/30
            </Button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <Lock className="h-3.5 w-3.5 text-green-600" /> Pago seguro MercadoPago
              </span>
              <span className="flex items-center gap-1">
                <Download className="h-3.5 w-3.5 text-green-600" /> Descarga inmediata
              </span>
              <span className="flex items-center gap-1">
                <Shield className="h-3.5 w-3.5 text-green-600" /> Garantía 7 días
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-3.5 w-3.5 text-green-600" /> Soporte WhatsApp
              </span>
            </div>

            {/* Métodos de pago */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-center text-gray-500 mb-3">ACEPTAMOS:</p>
              <div className="flex flex-wrap justify-center items-center gap-3 text-sm font-bold text-gray-700">
                <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg">💳 Yape</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg">💙 Plin</span>
                <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-lg">💳 Visa</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg">💳 Mastercard</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg">🏦 Transferencia</span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-lg">💵 Efectivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// GARANTÍA
// ============================================================
function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 md:p-12 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-white mb-6 shadow-lg">
            <Shield className="h-10 w-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Garantía de satisfacción de 7 días
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
            Compra la guía sin riesgo. Descárgala, revísala, aplícala por 7 días. Si sientes que no es para ti, escríbenos a soporte y te devolvemos el <strong>100% de tu dinero</strong>. Sin preguntas incómodas, sin condiciones, sin letra chica.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
            <CheckCircle2 className="h-5 w-5" />
            Riesgo CERO · 100% Garantizado
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Estamos tan seguros del valor que entregamos que asumimos todo el riesgo por ti.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ
// ============================================================
function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-orange-50/50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            ❓ PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-orange-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-orange-50/50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-base md:text-lg">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-orange-600 flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ÚLTIMO CTA
// ============================================================
function FinalCtaSection({ onBuy, timeLeft, mounted }: any) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🇵🇪</div>
        <div className="absolute bottom-10 right-10 text-9xl">🥑</div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
          Tu transformación empieza hoy
        </h2>
        <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed mb-8">
          No esperes al lunes. No esperes al próximo mes. No esperes a "estar lista(o)". Tu mejor versión está a 21 días de distancia. Y a solo S/30.
        </p>

        {/* Countdown */}
        <div className="inline-flex flex-col items-center gap-2 mb-6">
          <p className="text-sm font-semibold flex items-center gap-1.5 opacity-90">
            <Clock className="h-4 w-4" />
            LA OFERTA TERMINA EN:
          </p>
          <div className="flex gap-2 md:gap-3">
            <TimeBlock value={mounted ? timeLeft.hours : 24} label="HORAS" />
            <span className="text-4xl md:text-5xl font-black text-white/40 self-start">:</span>
            <TimeBlock value={mounted ? timeLeft.minutes : 0} label="MIN" />
            <span className="text-4xl md:text-5xl font-black text-white/40 self-start">:</span>
            <TimeBlock value={mounted ? timeLeft.seconds : 0} label="SEG" />
          </div>
        </div>

        <div className="mb-6">
          <span className="text-2xl line-through opacity-60">S/300</span>
          <span className="text-6xl md:text-7xl font-black mx-3">S/30</span>
        </div>

        <Button
          onClick={onBuy}
          className="bg-white text-orange-600 hover:bg-orange-50 font-black text-xl md:text-2xl px-10 md:px-16 py-7 md:py-8 rounded-full shadow-2xl transition-all hover:scale-105"
        >
          <ShoppingCart className="h-6 w-6 md:h-7 md:w-7 mr-2 md:mr-3" />
          COMPRAR MI GUÍA AHORA
        </Button>

        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm opacity-90">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" /> Acceso inmediato
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-4 w-4" /> Garantía 7 días
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="h-4 w-4" /> Pago 100% seguro
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Marca */}
          <div>
            <h3 className="text-white font-black text-xl mb-3">
              🇵🇪 Saber Peruano
            </h3>
            <p className="text-sm leading-relaxed">
              Guías de nutrición y bienestar basadas en la riqueza gastronómica del Perú. Comida real, hábitos sostenibles, resultados para toda la vida.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold mb-3">Contáctanos</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-500" />
                hola@nutricionperuana.pe
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500" />
                +51 999 888 777
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                WhatsApp: +51 999 888 777
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-3">Información</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Política de reembolso</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Descargo médico</a></li>
            </ul>
          </div>
        </div>

        {/* Redes */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-3">
            <a href="#" className="h-9 w-9 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="h-9 w-9 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="h-9 w-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-center md:text-right">
            © 2026 Nutrición Peruana Saludable. Todos los derechos reservados.
            <br />
            Esta guía es un material educativo. No reemplaza la consulta con un profesional de la salud.
          </p>
        </div>
      </div>
    </footer>
  );
}

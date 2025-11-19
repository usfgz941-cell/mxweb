import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, ShieldCheck, DollarSign, Copy, Check, X, Phone } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const whatsappNumber = "528126262322";

  const handleContactClick = () => {
    window.location.href = 'https://wa.me/528126262322';
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageClick = (imageUrl: string) => {
    setExpandedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setExpandedImage(null);
    document.body.style.overflow = '';
  };

  const WhatsAppButton = () => (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      <div className="flex items-center bg-blue-400 rounded-full px-6 py-3 shadow-md hover:bg-blue-500 transition-colors">
        <Phone className="w-5 h-5 text-white mr-3" />
        <span className="text-white font-medium mr-3 border-r border-blue-300 pr-3">WhatsApp: {whatsappNumber}</span>
        <button
          onClick={handleCopyClick}
          className="text-white hover:text-gray-200 transition-colors"
          title="Copy number"
        >
          {copied ? <Check className="w-5 h-5 text-green-100" /> : <Copy className="w-5 h-5" />}
        </button>
      </div>

      <button
        onClick={handleContactClick}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Contact Us</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-yellow-400">
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div className="min-h-screen px-4 py-8 flex items-center justify-center">
            <div 
              className="relative max-w-4xl w-full bg-white rounded-lg p-2"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={handleCloseModal}
                className="absolute -top-12 right-2 text-white hover:text-gray-300 p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="overflow-auto max-h-[80vh]">
                <img 
                  src={expandedImage} 
                  alt="Expanded view" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full px-0 sm:px-4 py-8">
        <nav className="flex justify-between items-center mb-12 px-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo_mercado.png"
              alt="Mercado Libre Logo"
              className="h-12 w-auto"
            />
            <h1 className="text-xl sm:text-3xl font-bold text-black">Registro Cooperativo Mercado Libre</h1>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto space-y-8 sm:space-y-16 px-4">
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 md:p-12 space-y-6">
                <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full text-yellow-800 font-semibold text-sm">
                  Unique Opportunity!
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Earn up to 8,500 Mexican Pesos!
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600">
                    ¡Trabajo de registro a tiempo parcial en MercadoLibre!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">Paso 1: Proporcionar documentos (firma electrónica, identificación, comprobante de domicilio) - <span className="font-semibold">800 pesos</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">Paso 2: Verificación de identidad - - <span className="font-semibold">1,200 pesos</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">Bono por finalización - - <span className="font-semibold">500 pesos</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">Ingreso mensual garantizado - <span className="font-semibold">500 pesos</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">Recomienda a un amigo para colaborar con nosotros y recibe una comisión por referencia de <span className="font-semibold">2000 pesos</span>.</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleContactClick}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Contact us on WhatsApp!</span>
                </button>
              </div>
              <div className="relative h-64 md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Business Illustration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-12 h-12 text-green-500" />
                <h3 className="text-xl font-bold text-gray-800">100% Seguro</h3>
              </div>
              <p className="text-gray-600">Mantienes el control total de tu firma electrónica. Si no cumplimos, puedes cancelarla en cualquier momento.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-12 h-12 text-green-500" />
                <h3 className="text-xl font-bold text-gray-800">Pagos Garantizados</h3>
              </div>
              <p className="text-gray-600">2,500 pesos el primer mes y 500 pesos mensuales garantizados a partir de entonces.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-12 h-12 text-green-500" />
                <h3 className="text-xl font-bold text-gray-800">Soporte Directo</h3>
              </div>
              <p className="text-gray-600">Soporte personalizado por WhatsApp en todo momento.</p>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sobre nosotros/Quiénes somos</h2>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Who We Are</h3>
                <div className="space-y-4 text-gray-600">
                  <p>We are a foreign trade company specializing in selling clothing, electronics, and digital products on Mercado Libre.</p>
                  <p>As we want to expand our business, we need more store accounts not only on Mercado Libre but also on Temu and TikTok. We offer competitive compensation to ensure both parties benefit: <span className="font-semibold">1500 pesos</span> per account.</p>
                  <p>Your first month's income will be 2,000 pesos + a 500 pesos bonus, followed by a fixed monthly income of 500 pesos.</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Quiénes Somos</h3>
                <div className="space-y-4 text-gray-600">
                  <p>Somos una empresa de comercio exterior especializada en la venta de ropa, electrónica y productos digitales en Mercado Libre.</p>
                  <p>Buscamos expandir nuestro negocio y necesitamos más tiendas no solo en Mercado Libre, sino también en Temu y TikTok. Ofrecemos una compensación competitiva que beneficia a ambas partes: <span className="font-semibold">1500 pesos</span> por cada cuenta.</p>
                  <p>El ingreso del primer mes es de 2,000 pesos + un bono de 500 pesos, seguido de un ingreso mensual fijo de 500 pesos.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Feedback/Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src="https://i.imgur.com/OhSN8xc.jpeg"
                    alt="Success Story 1"
                    className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://i.imgur.com/OhSN8xc.jpeg")}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">María González</h3>
                  <p className="text-gray-600 mt-2">"Empecé a trabajar con ellos el mes pasado y ya recibí mi primer pago de 2,500 pesos. El proceso fue sencillo y el equipo de soporte siempre estuvo allí para ayudar."</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src="https://i.imgur.com/Vxb29V6.jpeg"
                    alt="Success Story 1"
                    className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://i.imgur.com/Vxb29V6.jpeg")}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">Sofía Hernández</h3>
                  <p className="text-gray-600 mt-2">"La comunicación con ellos fue clara y cumplieron con los pagos (los 3,000 pesos del primer mes ya fueron pagados). Prometieron una renta mensual de 500 pesos a largo plazo y se encargarán de los impuestos y la operación. Aunque involucró información sensible como la firma electrónica, sus explicaciones sobre los riesgos y el control aliviaron mis preocupaciones. Espero seguir recibiendo los pagos puntualmente en el futuro."</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex justify-center items-center py-8">
            <WhatsAppButton />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText, AlertTriangle, Scale } from 'lucide-react';

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-amber-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-200 to-amber-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <motion.button
                className="flex items-center space-x-2 text-orange-800 hover:text-orange-900 transition-colors"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft size={20} />
                <span>Zurück zur Startseite</span>
              </motion.button>
            </Link>
            
            <div className="flex items-center space-x-2">
              <img 
                src="/image copy copy.png" 
                alt="Tier-Check Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-orange-800">Tier-Check</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
              Nutzungsbedingungen & Haftungsausschluss
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-orange-800 max-w-3xl mx-auto">
              Rechtliche Hinweise zur Nutzung unserer Website
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none"
        >
          <h2 className="text-2xl font-bold text-orange-900 mb-6">Nutzung der Inhalte</h2>
          
          <p className="text-gray-700 mb-8">
            Die auf dieser Website bereitgestellten Inhalte dienen ausschließlich zu Informationszwecken rund um das Thema Haustiere. Sie stellen keine tiermedizinische Beratung dar und ersetzen nicht den Besuch bei einer Tierärztin oder einem Tierarzt.
          </p>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Haftung für Inhalte</h2>
          
          <p className="text-gray-700 mb-8">
            Alle Inhalte wurden mit größter Sorgfalt erstellt. Der Betreiber übernimmt jedoch keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen. Die Nutzung der Inhalte erfolgt auf eigene Verantwortung.
          </p>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Externe Links</h2>
          
          <p className="text-gray-700 mb-8">
            Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte hat der Betreiber keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Affiliate-Hinweis</h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-700">
              Diese Website enthält sogenannte „Affiliate-Links" zu Partnerprogrammen wie Amazon PartnerNet und Awin. Wenn Sie auf einen solchen Link klicken und darüber einen Kauf tätigen, erhält der Betreiber dieser Website eine Provision.
            </p>
            <p className="text-gray-700">
              Als Amazon-Partner verdient der Betreiber an qualifizierten Verkäufen. Für Sie entstehen dadurch keine zusätzlichen Kosten.
            </p>
            <p className="text-gray-700">
              Die Auswahl der verlinkten Produkte und Dienstleistungen erfolgt unabhängig und ohne Einfluss der Affiliate-Partner auf den redaktionellen Inhalt.
            </p>
            <p className="text-gray-700">
              Weitere Informationen zu den einzelnen Affiliate-Programmen finden Sie in der Datenschutzerklärung.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Urheberrecht</h2>
          
          <p className="text-gray-700 mb-8">
            Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken) unterliegen dem Urheberrecht. Jede Vervielfältigung, Bearbeitung oder Verbreitung bedarf der vorherigen schriftlichen Zustimmung des Betreibers oder Rechteinhabers.
          </p>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">§ 5 Haftungsausschluss</h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Scale size={20} className="text-orange-600" />
              <h3 className="text-lg font-semibold text-orange-800">Wichtiger Haftungsausschluss</h3>
            </div>
            <div className="text-orange-700 space-y-3">
              <p>
                <strong>Medizinischer Haftungsausschluss:</strong> Die bereitgestellten Informationen ersetzen 
                keinesfalls eine professionelle tierärztliche Beratung, Diagnose oder Behandlung.
              </p>
              <p>
                <strong>Inhaltliche Richtigkeit:</strong> Trotz sorgfältiger Prüfung übernehmen wir keine 
                Haftung für die Vollständigkeit, Richtigkeit und Aktualität der Inhalte.
              </p>
              <p>
                <strong>Externe Links:</strong> Für Inhalte verlinkter Seiten sind ausschließlich deren 
                Betreiber verantwortlich.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6 mt-8">§ 6 Datenschutz</h2>
          
          <p className="text-gray-700 mb-4">
            Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer 
            <Link href="/datenschutz" className="text-orange-600 hover:text-orange-700 font-medium"> Datenschutzerklärung</Link>.
          </p>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">§ 7 Änderungen der AGB</h2>
          
          <p className="text-gray-700 mb-4">
            Der Anbieter behält sich vor, diese AGB jederzeit zu ändern. Nutzer werden über Änderungen 
            per E-Mail oder durch einen Hinweis auf der Website informiert.
          </p>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">§ 8 Schlussbestimmungen</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Anwendbares Recht:</strong> Es gilt das Recht der Bundesrepublik Deutschland.
            </p>
            <p className="text-gray-700">
              <strong>Gerichtsstand:</strong> Ausschließlicher Gerichtsstand ist Leverkusen.
            </p>
            <p className="text-gray-700">
              <strong>Salvatorische Klausel:</strong> Sollten einzelne Bestimmungen unwirksam sein, 
              bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </div>

          <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>Stand: Januar 2024</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';

export default function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-orange-800 max-w-3xl mx-auto">
              DSGVO-konform, Stand: August 2025
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
          <h2 className="text-2xl font-bold text-orange-900 mb-6">Verantwortliche Stelle</h2>
          
          <div className="mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Nouri IT – Kleingewerbe</strong></p>
              <p>Inhaber: [Vor- und Nachname einfügen]</p>
              <p>[Anschrift einfügen]</p>
              <p>Deutschland</p>
              <p>E-Mail: kf-labs@outlook.de</p>
              <p>Hosting: united-domains AG, Starnberg, Deutschland</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Zweck der Verarbeitung</h2>
          
          <div className="mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Bereitstellung und Optimierung des Blogs</li>
              <li>Beantwortung von Kontaktanfragen</li>
              <li>Einbindung von Affiliate-Links</li>
              <li>Technische Sicherheit (Server-Logs)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Rechtsgrundlagen der Verarbeitung</h2>
          
          <div className="mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung, z. B. bei Kontaktanfragen)</li>
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z. B. bei Affiliate-Cookies)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z. B. zur Abwehr von Angriffen)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Server-Logfiles</h2>
          
          <p className="text-gray-700 mb-8">
            Beim Aufruf dieser Website werden automatisch Informationen erfasst, die Ihr Browser übermittelt (z. B. IP-Adresse, Datum/Uhrzeit, Browsertyp, Betriebssystem). Diese Daten sind nicht bestimmten Personen zuordenbar und dienen ausschließlich der technischen Optimierung und Sicherheit. Eine Speicherung erfolgt max. 7 Tage.
          </p>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Affiliate-Programme</h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-700">
              Diese Website nimmt an Partnerprogrammen teil, insbesondere:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Amazon PartnerNet – Amazon EU S.à r.l., 38 avenue John F. Kennedy, L-1855 Luxemburg (Datenschutzerklärung Amazon)</li>
              <li>Awin AG – Eichhornstraße 3, 10785 Berlin, Deutschland (Datenschutzerklärung Awin)</li>
            </ul>
            <p className="text-gray-700">
              Beim Klick auf einen Affiliate-Link wird ein Cookie durch den jeweiligen Partner gesetzt, um die Herkunft des Kaufes nachvollziehen zu können. Die Speicherung dieser Cookies erfolgt nur mit Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Kontaktaufnahme</h2>
          
          <p className="text-gray-700 mb-8">
            Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Diese Daten werden nach spätestens 6 Monaten gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.
          </p>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Ihre Rechte</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-700 mb-3">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
            </p>
            <p className="text-blue-700">
              Sie können sich jederzeit bei der zuständigen Datenschutzaufsichtsbehörde beschweren.
            </p>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6 mt-8">5. Cookies</h2>
          
          <p className="text-gray-700 mb-4">
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät 
            gespeichert werden. Weitere Informationen finden Sie in unserer 
            <Link href="/cookies" className="text-orange-600 hover:text-orange-700 font-medium"> Cookie-Richtlinie</Link>.
          </p>

          <h2 className="text-2xl font-bold text-orange-900 mb-6 mt-8">6. Kontakt</h2>
          
          <p className="text-gray-700">
            Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p>E-Mail: Tier-Check@outlook.de</p>
            <p>Adresse: Musterstraße 123, 51375 Leverkusen</p>
          </div>

          <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>Stand: Januar 2024</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
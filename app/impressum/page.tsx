'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

export default function ImpressumPage() {
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
              Impressum
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-orange-800 max-w-3xl mx-auto">
              Rechtliche Informationen
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
          <h2 className="text-2xl font-bold text-orange-900 mb-6">Angaben gemäß § 5 TMG</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="space-y-2 text-gray-700">
              <p><strong>Nouri IT – Kleingewerbe</strong></p>
              <p>Inhaber: [Vor- und Nachname einfügen]</p>
              <p>[Anschrift einfügen]</p>
              <p>Deutschland</p>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-600" size={18} />
                <span className="text-gray-700">kf-labs@outlook.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-600" size={18} />
                <span className="text-gray-700">[optional]</span>
              </div>
            </div>
            
            <div className="mt-4 space-y-2 text-gray-700">
              <p><strong>USt-ID:</strong> keine (Kleinunternehmer nach §19 UStG)</p>
              <p><strong>Gerichtsstand:</strong> Sitz des Betreibers</p>
            </div>
          </div>

          <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>Stand: August 2025</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
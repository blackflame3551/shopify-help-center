import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, PhoneCall } from "lucide-react";

const helpTopics = [
  {
    title: "Getting Started",
    description: "Set up your store, add products, and start selling.",
    link: "/articles/getting-started"
  },
  {
    title: "Orders and Shipping",
    description: "Manage orders, shipping rates, and fulfillment.",
    link: "/articles/orders-shipping"
  },
  {
    title: "Payments",
    description: "Set up payment providers and manage transactions.",
    link: "/articles/payments"
  },
  {
    title: "Themes and Customization",
    description: "Customize the look and feel of your store.",
    link: "/articles/themes-customization"
  },
  {
    title: "Apps and Integrations",
    description: "Enhance your store with apps and integrations.",
    link: "/articles/apps-integrations"
  },
  {
    title: "Account and Security",
    description: "Manage your account settings and security options.",
    link: "/articles/account-security"
  },
];

export default function ShopifyHelpCenter() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Shopify Help Center</h1>
        <p className="text-gray-600 mb-6">
          Find answers to your questions about Shopify.
        </p>
        <div className="flex items-center justify-center gap-2 max-w-xl mx-auto mb-10">
          <Input
            className="w-full"
            placeholder="Search topics, articles, or keywords"
          />
          <Button variant="default">
            <Search className="w-4 h-4 mr-2" /> Search
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {helpTopics.map((topic, idx) => (
            <a href={topic.link} key={idx}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
                  <p className="text-gray-600">{topic.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        <div className="border-t pt-10">
          <h2 className="text-2xl font-semibold mb-4">Need more help?</h2>
          <p className="text-gray-600 mb-4">Contact our support team through the following platforms:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://t.me/yourshopifysupport"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-2xl shadow hover:bg-blue-600"
            >
              <MessageCircle className="inline w-4 h-4 mr-1" /> Telegram Support
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-2xl shadow hover:bg-green-600"
            >
              <PhoneCall className="inline w-4 h-4 mr-1" /> WhatsApp Support
            </a>
          </div>
        </div>
        <div className="mt-16 text-sm text-gray-500">
          <p>Live Chat coming soon. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
}

'use client'

import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Script from "next/script"

export default function LandingPage() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <header className="sticky-top bg-light">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link className="navbar-brand" href="/">
                ChaGPT
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" href="#features">Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#testimonials">Testimonials</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#contact">Contact</Link>
                  </li>
                </ul>
                <button className="btn btn-primary btn-sm">Get Started</button>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow-1">
          <section className="py-5 py-md-7">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <h1 className="display-4 fw-bold mb-3">AI Chatbot for Customer Service</h1>
                  <p className="lead mb-4">Demo of AI Chatbot for automated customer service created with MyBotChat</p>
                  <div className="d-flex flex-column flex-sm-row gap-2">
                    <button className="btn btn-primary">
                      Get Started
                      <ArrowRight className="ms-2" size={16} />
                    </button>
                    <button className="btn btn-outline-secondary">Learn More</button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Image
                    src="/img/chat-ui-desktop.jpg"
                    alt="Chatbot UI"
                    width={550}
                    height={550}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-5 bg-light">
            <div className="container">
              <h2 className="text-center mb-5">Features</h2>
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "64px", height: "64px" }}>
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="h4 mb-3">Server-Side Rendering</h3>
                    <p className="text-muted">Improve performance and SEO with server-side rendering capabilities.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "64px", height: "64px" }}>
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="h4 mb-3">Fast Refresh</h3>
                    <p className="text-muted">Instantly see your changes with Next.js Fast Refresh feature.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "64px", height: "64px" }}>
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="h4 mb-3">API Routes</h3>
                    <p className="text-muted">Build API endpoints easily with Next.js API Routes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-5">
            <div className="container">
              <h2 className="text-center mb-5">Testimonials</h2>
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="text-center">
                    <Image
                      src="/img/testimonials-4.jpg"
                      alt="Alice Johnson"
                      width={100}
                      height={100}
                      className="rounded-circle mb-3"
                    />
                    <h3 className="h5 mb-1">Alice Johnson</h3>
                    <p className="text-muted mb-3">CEO, TechCorp</p>
                    <p className="text-muted">"MyBot.Chat's AI took my website from crickets to conversations! 24/7 support & happy customers."</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="text-center">
                    <Image
                      src="/img/testimonials-2.jpg"
                      alt="Bob Smith"
                      width={100}
                      height={100}
                      className="rounded-circle mb-3"
                    />
                    <h3 className="h5 mb-1">Bob Smith</h3>
                    <p className="text-muted mb-3">CTO, InnovateCo</p>
                    <p className="text-muted">"AI is a lifesaver! Answers customer questions 24/7 & frees me up for tougher tasks. Love the easy setup - no coding needed!"</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <Image
                      src="/img/testimonials-3.jpg"
                      alt="Carol Davis"
                      width={100}
                      height={100}
                      className="rounded-circle mb-3"
                    />
                    <h3 className="h5 mb-1">Carol Davis</h3>
                    <p className="text-muted mb-3">Lead Developer, WebSolutions</p>
                    <p className="text-muted">"MyBot.Chat's AI saved my team hours! It answers customer questions & frees us for complex issues. Night & day support, a lifesaver!"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-5 bg-light">
            <div className="container">
              <h2 className="text-center mb-5">Contact Us</h2>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" rows={3} placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                  </form>
                  <div className="mt-4">
                    <div className="d-flex align-items-center mb-2">
                      <MapPin size={20} className="me-2" />
                      <span>123 Main St, Anytown, USA 12345</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <Phone size={20} className="me-2" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <Mail size={20} className="me-2" />
                      <span>contact@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-light py-4 mt-auto">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <small className="text-muted">&copy; 2023 ACME Inc. All rights reserved.</small>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <Link href="#" className="text-muted text-decoration-none me-3">
                  <small>Terms of Service</small>
                </Link>
                <Link href="#" className="text-muted text-decoration-none">
                  <small>Privacy</small>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
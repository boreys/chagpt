import Link from 'next/link'

export default function Footer(){
    return (
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
    );
}
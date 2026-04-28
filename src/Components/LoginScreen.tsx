import React, { useState } from 'react';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body { margin: 0; font-family: 'Inter', sans-serif; }
          input::placeholder { color: #d1d5db; }
          .login-btn:hover { background-color: #6a1b4d !important; cursor: pointer; }
        `}
      </style>

      <div style={styles.card}>
        {/* Logo Section */}
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="4" x2="12" y2="20" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <circle cx="9" cy="9" r="0.5" fill="#802a5a" stroke="none" />
              <circle cx="15" cy="9" r="0.5" fill="#802a5a" stroke="none" />
              <circle cx="9" cy="15" r="0.5" fill="#802a5a" stroke="none" />
              <circle cx="15" cy="15" r="0.5" fill="#802a5a" stroke="none" />
            </svg>
          </div>
        </div>

        <h1 style={styles.title}>Login to your Account</h1>
        <p style={styles.subtitle}>See what is going on with your business</p>

        {/* Social Login */}
        <button style={styles.googleBtn}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
            alt="Google" 
            style={{ width: 18, marginRight: 10 }} 
          />
          <span style={styles.googleBtnText}>Continue with Google</span>
        </button>

        <div style={styles.divider}>
          <span style={styles.dividerText}>or Sign in with Email</span>
        </div>

        {/* Form Fields */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input 
            type="email" 
            placeholder="mail@abc.com" 
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input 
            type="password" 
            placeholder="****************" 
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Options */}
        <div style={styles.optionsRow}>
          <label style={styles.checkboxContainer}>
            <input type="checkbox" style={styles.checkbox} defaultChecked />
            <span style={styles.checkboxLabel}>Remember Me</span>
          </label>
          <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
        </div>

        {/* Login Action */}
        <button className="login-btn" style={styles.loginBtn}>Login</button>

        <div style={styles.footer}>
          <span>Not Registered Yet? </span>
          <a href="#" style={styles.createAccount}>Create an account</a>
        </div>
      </div>
    </div>
  );
};

// --- Styles ---
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    padding: '20px',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center' as const,
  },
  logoContainer: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
  logoIcon: {
    padding: '10px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#4b4b4b',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '14px',
    color: '#8e8e8e',
    marginBottom: '32px',
  },
  googleBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '24px',
  },
  googleBtnText: {
    fontSize: '14px',
    color: '#6b7280',
    fontWeight: '500',
  },
  divider: {
    position: 'relative',
    margin: '30px 0',
    borderBottom: '1px dashed #e5e7eb',
  },
  dividerText: {
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    padding: '0 15px',
    fontSize: '12px',
    color: '#9ca3af',
  },
  inputGroup: {
    textAlign: 'left' as const,
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '14px',
    boxSizing: 'border-box' as const,
    outline: 'none',
  },
  optionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '8px',
    accentColor: '#802a5a',
  },
  checkboxLabel: {
    fontSize: '13px',
    color: '#9ca3af',
  },
  forgotPassword: {
    fontSize: '13px',
    color: '#802a5a',
    textDecoration: 'none',
    fontWeight: '600',
  },
  loginBtn: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#802a5a',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '40px',
    transition: 'background-color 0.2s',
  },
  footer: {
    fontSize: '14px',
    color: '#9ca3af',
  },
  createAccount: {
    color: '#802a5a',
    textDecoration: 'none',
    fontWeight: '600',
  }
};

export default LoginScreen;
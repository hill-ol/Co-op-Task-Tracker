// src/components/Auth.tsx
import React, { useState } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { LogIn, LogOut, Mail } from 'lucide-react';
import '../styles/Auth.css';

interface AuthProps {
    user: any;
}

const Auth: React.FC<AuthProps> = ({ user }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState('');
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleEmailAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            setShowAuthModal(false);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            setShowAuthModal(false);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (err: any) {
            setError(err.message);
        }
    };

    if (user) {
        return (
            <div className="auth-status">
                <span className="user-email">{user.email}</span>
                <button onClick={handleSignOut} className="sign-out-button">
                    <LogOut className="auth-icon" />
                    Sign Out
                </button>
            </div>
        );
    }

    return (
        <>
            <button
                onClick={() => setShowAuthModal(true)}
                className="sign-in-button"
            >
                <LogIn className="auth-icon" />
                Sign In to Sync
            </button>

            {showAuthModal && (
                <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
                    <div className="modal-content auth-modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>

                        <button onClick={handleGoogleSignIn} className="google-button">
                            <Mail className="auth-icon" />
                            Continue with Google
                        </button>

                        <div className="divider">or</div>

                        <form onSubmit={handleEmailAuth}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="auth-input"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="auth-input"
                            />
                            {error && <p className="auth-error">{error}</p>}
                            <button type="submit" className="auth-submit">
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </button>
                        </form>

                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="toggle-auth"
                        >
                            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Auth;
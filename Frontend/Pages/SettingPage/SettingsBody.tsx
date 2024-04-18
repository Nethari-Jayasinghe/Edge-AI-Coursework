import React, { useState } from 'react';
import SettingsInput from './SettingsInput';
import { Button } from '@mui/material';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

export default function SettingsBody(){
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = () => {
        if (newPassword !== confirmPassword) {
            alert("New passwords do not match!");
            return;
        }

        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            alert("No user is currently signed in.");
            return;
        }
// Ensure currentPassword is always a non-null string
const passwordToUse: string = currentPassword ?? '';
if (user && user.email) {
    // Re-authenticate user
    const credential = EmailAuthProvider.credential(user.email, passwordToUse);
    reauthenticateWithCredential(user, credential)
        .then(() => {
            // If re-authentication successful, update password
            updatePassword(user, newPassword)
                .then(() => {
                    alert("Password successfully updated!");
                })
                .catch(error => {
                    alert("Error updating password: " + error.message);
                });
        })
        .catch(error => {
            alert("Error re-authenticating: " + error.message);
        });
} else {
    alert("User is null or user email is null.");
}
    };

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",marginTop: 100 }}>
            <SettingsInput name="currentPassword" type="password" title="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <SettingsInput name="newPassword" type="password" title="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <SettingsInput name="confirmPassword" type="password" title="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <Button style={{ fontSize: 15, fontWeight: "600", color: "#273240", backgroundColor: "#E9C47D", marginTop: 20 }} onClick={handlePasswordChange}>
                Confirm
            </Button>
        </div>
    );
}

"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import {doc , getDoc, setDoc, collection} from "firebase/firestore";
import { db } from "@/app/firebase/config";
import {User} from "/firebase/auth"
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<user | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUser(userSnap.data() );
        } else {
          await setDoc(userRef, {
            email: user.email,
            role: "user",
          });
          setUser({
            email: user.email,
            role: "user",
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }
  , []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  bg-gradient-to-b from-gray-600 to-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    </div>
  );
}

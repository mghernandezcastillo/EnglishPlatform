import { useState, useEffect } from 'react';
import { dbAdmin } from '../lib/db';

export interface BrandSettings {
  name: string;
  logoUrl: string;
  teacherPin: string;
}

const defaultBrand: BrandSettings = {
  name: "Maven English",
  logoUrl: "/logo.jpg",
  teacherPin: "2393"
};

export const useBrand = () => {
  const [brand, setBrand] = useState<BrandSettings>(defaultBrand);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dbAdmin.getBrandSettings().then(stored => {
       if (stored) {
         setBrand({ ...defaultBrand, ...stored });
       }
       setIsLoading(false);
    });
  }, []);

  const saveBrand = async (newBrand: BrandSettings) => {
    setBrand(newBrand);
    await dbAdmin.saveBrandSettings(newBrand);
  };

  return { brand, saveBrand, isLoading };
};

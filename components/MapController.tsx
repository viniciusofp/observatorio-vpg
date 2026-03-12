'use client';

import { Button } from '@/components/ui/button';
import { Mountain, RotateCcw } from 'lucide-react';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useMap } from '@/components/ui/map';

export type MapControllerProps = {
  setPopup: Dispatch<
    SetStateAction<{
      coordinates: [number, number];
      properties: any;
    } | null>
  >;
};

export default function MapController({ setPopup }: MapControllerProps) {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;

    const handleMove = () => {
      setPopup(null);
    };

    map.on('move', handleMove);
    return () => {
      map.off('move', handleMove);
    };
  }, [map, isLoaded]);

  if (!isLoaded) return null;

  return (
    <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
      <div className="flex gap-2">
        <Button size="sm" variant="secondary">
          <Mountain className="size-4 mr-1.5" />
          3D View
        </Button>
        <Button size="sm" variant="secondary">
          <RotateCcw className="size-4 mr-1.5" />
          Reset
        </Button>
      </div>
      <div className="rounded-md bg-background/90 backdrop-blur px-3 py-2 text-xs font-mono border">
        <div>Pitch: °</div>
        <div>Bearing: °</div>
      </div>
    </div>
  );
}

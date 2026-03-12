'use client';

import Logo from '@/components/Logo';
import { MainMap } from '@/components/MainMap';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import Logos from './Logos';
import Nav from './Nav';

export interface DataPointInterface {
  id: number;
  category: number;
  country: string;
  project_status: number;
  status: number;
  reaction: number;
  locale: string;
  headline: string;
  name: string;
  slug: string;
  general: any;
  commodity: string[];
  company: string[];
  type: string[];
}
export type MainWrapperProps = {};

export default function MainWrapper(props: MainWrapperProps) {
  const [showMap, useShowMap] = useState(true);
  const [selectedPoint, setSelectedPoint] = useState<{
    coordinates: [number, number];
    properties: DataPointInterface;
  } | null>(null);
  return (
    <div className="md:flex h-svh">
      <div className="md:hidden p-3 pb-0">
        <Nav />
      </div>
      <div
        className={cn(
          'w-full md:w-1/2 lg:w-2/5 max-w-xl shrink-0 bg-everglade-50',
          showMap && 'hidden md:block'
        )}
      >
        <ScrollArea className="h-svh w-full border-l p-3">
          <div className="grid gap-2">
            <Nav />
            {selectedPoint ? (
              <div className="w-full border border-dashed p-4  gap-3 bg-white relative">
                <div
                  className="cursor-pointer p-2 absolute top-3 right-3 z-2"
                  onClick={() => setSelectedPoint(null)}
                >
                  <X className="size-6 text-muted-foreground hover:text-foreground" />
                </div>
                <p className="uppercase text-xs tracking-widest mb-3">
                  {selectedPoint.properties.country}
                </p>
                <div className="prose">
                  <h2>{selectedPoint.properties.name}</h2>
                  {selectedPoint.properties.headline ? (
                    <p className="lead">{selectedPoint.properties.headline}</p>
                  ) : null}
                  {selectedPoint.properties.country ? (
                    <>
                      <h4>
                        <strong>País</strong>
                      </h4>
                      <p>{selectedPoint.properties.country}</p>
                    </>
                  ) : null}
                  {selectedPoint.properties.type ? (
                    <>
                      <h4>
                        <strong>Tipo</strong>
                      </h4>
                      <p>
                        {typeof selectedPoint.properties.type === 'string'
                          ? JSON.parse(selectedPoint.properties.type)?.join(
                              ', '
                            )
                          : selectedPoint.properties.type?.join(', ')}
                      </p>
                    </>
                  ) : null}

                  {selectedPoint.properties.company ? (
                    <>
                      <h4>
                        <strong>Empresa</strong>
                      </h4>
                      <p>
                        {typeof selectedPoint.properties.company === 'string'
                          ? JSON.parse(selectedPoint.properties.company)?.join(
                              ', '
                            )
                          : selectedPoint.properties.company?.join(', ')}
                      </p>
                    </>
                  ) : null}

                  {selectedPoint.properties.commodity ? (
                    <>
                      <h4>
                        <strong>Commodity</strong>
                      </h4>
                      <p>
                        {typeof selectedPoint.properties.commodity === 'string'
                          ? JSON.parse(
                              selectedPoint.properties.commodity
                            )?.join(', ')
                          : selectedPoint.properties.commodity?.join(', ')}
                      </p>
                    </>
                  ) : null}
                </div>
              </div>
            ) : null}

            <p className="uppercase text-xs tracking-widest mt-3 mx-2 relative z-3 text-muted-foreground">
              Realização
            </p>
            <div className="border border-dashed p-4 px-1 bg-white relative overflow-hidden">
              <div className="absolute left-1 top-0 h-full w-36 bg-linear-to-r from-white to-transparent z-2 pointer-events-none"></div>
              <div className="absolute right-1 top-0 h-full w-36 bg-linear-to-l from-white to-transparent z-2 pointer-events-none"></div>
              <Logos />
            </div>
          </div>
        </ScrollArea>
      </div>

      <div className="w-full h-[calc(100svh-94px)] md:h-full p-3">
        <MainMap
          selectedPoint={selectedPoint}
          setSelectedPoint={setSelectedPoint}
        />
      </div>
    </div>
  );
}

/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { NIVO_COLORS } from '@sonatype/react-shared-components';

const transport = [
  'plane',
  'helicopter',
  'boat',
  'train',
  'subway',
  'bus',
  'car',
  'moto',
  'bicycle',
  'horse',
  'other'
];

const country = [
  'Japan',
  'France',
  'US',
  'Germany',
  'Norway'
];

const generateStringData = (numberOfLines: number, [min, max]: [number, number]) =>
  Array.from({ length: numberOfLines }).map((_, index) => ({
    id: country[index],
    data: transport.map(name => ({
      x: name,
      y: Math.floor(Math.random() * (max - min + 1) + min)
    }))
  }));

const MyResponsiveLine = () => (
  <ResponsiveLine data={generateStringData(5, [0, 500])}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{
                    type: 'linear',
                    stacked: true,
                    reverse: false
                  }}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  colors={NIVO_COLORS}
                  axisBottom={{
                    legend: 'transportation',
                    legendOffset: 40,
                    legendPosition: 'middle'
                  }}
                  axisLeft={{
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                  }}
                  axisTop={{
                    legend: 'Transportation in Different Countries',
                    legendOffset: -40,
                    legendPosition: 'middle'
                  }}
                  legends={[
                    {
                      anchor: 'bottom-right',
                      direction: 'column',
                      translateX: 100,
                      itemWidth: 80,
                      itemHeight: 20,
                      symbolSize: 12,
                      symbolShape: 'circle'
                    }
                  ]}
  />
);

export default function NivoLineExample() {
  return (
    <div style={{ height: 400 }} className="lineChart">
      <MyResponsiveLine></MyResponsiveLine>
    </div>
  );
}

'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Pie, PieChart, Sector, SectorProps } from 'recharts';
import { CustomTooltip } from './CustomTooltip';

export const Card = ({ data, dataKey, xAxisKey, mainHeading, mainLabel, showData, color, anotherLabel, type }) => {
    return (
        <div className="bg-[#0a0a0a] h-60 rounded-md border border-[#ffffff24] p-5">
            <div>
                <h2 className='text-lg'>{mainHeading}</h2>
                <p className='text-sm'>{mainLabel}</p>
            </div>
            <div className="h-full">
                <ResponsiveContainer width="100%" height="100%">
                    {
                        type === 'line'
                        ?
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            >
                            <Tooltip content={<CustomTooltip dataKey={showData} anotherKey={anotherLabel}></CustomTooltip>} />
                            <Line type="linear" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
                        </LineChart>
                        :
                        'Ahoj'
                    }
                </ResponsiveContainer>
            </div>
        </div>
    )
}
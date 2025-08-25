export const CustomTooltip = ({ active, payload, dataKey, anotherKey}) => {
    if (active && payload && payload.length) {
        const date = new Date(payload[0].payload.date).toLocaleDateString('en-EN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

        return (
            <div className="bg-black text-white p-2 rounded text-sm border border-[#ffffff24] pr-7">
                <p className="text-[#ffffff70] mb-2">{date}</p>
                <p>{dataKey.charAt(0).toUpperCase() + dataKey.slice(1)}: {payload[0].value}</p>
                <p>{payload[0].payload?.[anotherKey]} 
                    {(() => {
                        switch (anotherKey) {
                            case 'revenue':
                                return ' $'
                            case 'guests':
                                return ' guests'
                        }
                    })()
                    }
                </p>
            </div>
        );
    }

    return null;
}
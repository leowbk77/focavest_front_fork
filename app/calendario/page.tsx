'use client'
import { DailyActivities } from "@/components/Home/components/DailyActivities/DailyActivities";
import { Flex, Text, Title } from '@mantine/core';
import AgendaService from "@/service/agenda.service";
import { useEffect, useState } from "react";

export default function Calendario() {
    const [agenda, setAgenda] = useState(null);
    
    useEffect(() => {
        const fetchAgenda = async () => {
            const result = await AgendaService.byDate("2023-10-30");
            setAgenda(result);
        }
        fetchAgenda();
    },[]);
    
    return (       <>
            <DailyActivities />
            <div>
                <Flex direction={'column'}>
                    {agenda && (
                        <>
                            <Title size={16} c={'#616E7D'} ff={'monospace'}>
                                {agenda.date}
                            </Title>
                            {agenda.tasks.map((task, index) => (
                                <Text key={index} size={'10px'} ff={'monospace'} pl={'sm'} c={'#616E7D'}>
                                    {task.subject}
                                </Text>
                            ))}
                        </>
                    )}
                </Flex>
            </div>
        </>
    );
}
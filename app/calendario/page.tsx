'use client'
import { DailyActivities } from "@/components/Home/components/DailyActivities/DailyActivities";
import { Flex, Text, Title } from '@mantine/core';
import AgendaService from "@/service/agenda.service";
import {useQuery} from '@tanstack/react-query';

export default function Calendario() {

    const {
        data,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['query-agenda'], 
        queryFn: async () => await AgendaService.byDate("2023-10-30"),
    });

    return (       
        <>
            <DailyActivities />
            <div>
                <Flex direction={'column'}>
                    {data && (
                        <>
                            <Title size={16} c={'#616E7D'} ff={'monospace'}>
                                {data?.date}
                            </Title>
                            {data?.tasks.map((task, index) => (
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
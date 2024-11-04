'use client'
import { DailyActivities } from "@/components/Home/components/DailyActivities/DailyActivities";
import { Flex, Text, Title } from '@mantine/core';
import {DatePicker} from '@mantine/dates';
import AgendaService from "@/service/agenda.service";
import {useQuery} from '@tanstack/react-query';
import { useState } from "react";
import 'dayjs/locale/pt-br';

export default function Calendario() {
    const [dateValue, setDateValue] = useState<Date | null>(null);

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
            <Flex direction={'row'}>
                <DatePicker 
                    locale="pt-br"
                    value={dateValue} 
                    onChange={setDateValue}
                    firstDayOfWeek={0}
                    size="md"
                />
            </Flex>
            
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
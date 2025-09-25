"use client"

import StatusBar from "@/app/ui/statusBar/StatusBar";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";

export default function Home() {
  return (
    <div>
      <StatusBar header={"Main"}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-content1">
          <CardBody>
            <h2 className="text-xl font-semibold text-content1-foreground mb-4">
              Карточка 1
            </h2>
            <p className="text-content2-foreground">
              Этот текст адаптируется под выбранную тему
            </p>
            <Button color="primary" className="mt-4">
              Кнопка Primary
            </Button>
          </CardBody>
        </Card>

        <Card className="bg-content2">
          <CardBody>
            <h2 className="text-xl font-semibold text-content2-foreground mb-4">
              Карточка 2
            </h2>
            <p className="text-default-600">
              HeroUI автоматически подбирает цвета
            </p>
            <Button color="secondary" variant="bordered" className="mt-4">
              Кнопка Secondary
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

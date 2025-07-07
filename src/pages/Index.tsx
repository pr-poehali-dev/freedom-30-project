import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentDay, setCurrentDay] = useState(7);
  const [achievements, setAchievements] = useState([
    { id: 1, title: "3 дня без срывов", completed: true, icon: "Trophy" },
    { id: 2, title: "Прочитал 5 статей", completed: true, icon: "BookOpen" },
    { id: 3, title: "Неделя силы", completed: false, icon: "Zap" },
    { id: 4, title: "Месяц свободы", completed: false, icon: "Award" },
  ]);

  const treeHeight = Math.min(currentDay * 10, 300);
  const progressPercentage = (currentDay / 30) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon
                  name="Zap"
                  className="w-6 h-6 text-white"
                  fallback="Circle"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                30 дней свободы
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon
                  name="LifeBuoy"
                  className="w-4 h-4 mr-2"
                  fallback="Circle"
                />
                SOS-помощь
              </Button>
              <Button size="sm">
                <Icon name="User" className="w-4 h-4 mr-2" fallback="Circle" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Твой путь к <span className="text-blue-600">свободе</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Программа рассчитана на 30 дней и одобрена врачом-сексологом.
            Ежедневные задания, научные материалы и трекинг прогресса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Play" className="w-5 h-5 mr-2" fallback="Circle" />
              Начать программу
            </Button>
            <Button variant="outline" size="lg">
              <Icon
                name="FileText"
                className="w-5 h-5 mr-2"
                fallback="Circle"
              />
              Пройти тест
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Tree */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  name="TreePine"
                  className="w-6 h-6 text-green-600"
                  fallback="Circle"
                />
                Дерево роста
              </CardTitle>
              <CardDescription>
                Визуализация твоего прогресса. Чем дольше без срывов, тем больше
                дерево.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-center h-64 bg-gradient-to-t from-green-50 to-blue-50 rounded-lg relative overflow-hidden">
                {/* Ground */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-200 rounded-b-lg"></div>

                {/* Tree */}
                <div className="relative z-10">
                  {/* Trunk */}
                  <div className="w-4 h-16 bg-amber-700 mx-auto mb-0"></div>

                  {/* Foliage */}
                  <div
                    className="transition-all duration-1000 ease-out"
                    style={{
                      width: `${Math.max(60, treeHeight / 3)}px`,
                      height: `${treeHeight}px`,
                      background:
                        "linear-gradient(to bottom, #10b981, #059669)",
                      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                      margin: "0 auto",
                      transform: "translateY(-8px)",
                    }}
                  ></div>
                </div>

                {/* Progress indicator */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/80">
                    День {currentDay}/30
                  </Badge>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    Прогресс программы
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Daily Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  name="BarChart3"
                  className="w-6 h-6 text-blue-600"
                  fallback="Circle"
                />
                Сегодняшние показатели
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Настроение</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className={`w-4 h-4 ${i <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        fallback="Circle"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Энергия</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i <= 3 ? "bg-green-500" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Уровень тяги</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i <= 2 ? "bg-red-500" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button className="w-full" size="sm">
                  <Icon
                    name="Plus"
                    className="w-4 h-4 mr-2"
                    fallback="Circle"
                  />
                  Обновить показатели
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon
                name="Trophy"
                className="w-6 h-6 text-yellow-600"
                fallback="Circle"
              />
              Достижения
            </CardTitle>
            <CardDescription>
              Отмечай свои успехи и получай мотивацию для дальнейшего движения.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    achievement.completed
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon
                      name={achievement.icon}
                      className={`w-6 h-6 ${
                        achievement.completed
                          ? "text-green-600"
                          : "text-gray-400"
                      }`}
                      fallback="Circle"
                    />
                    {achievement.completed && (
                      <Icon
                        name="Check"
                        className="w-5 h-5 text-green-600"
                        fallback="Circle"
                      />
                    )}
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900">
                    {achievement.title}
                  </h3>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Icon
                name="Calendar"
                className="w-12 h-12 text-blue-600 mx-auto mb-4"
                fallback="Circle"
              />
              <h3 className="font-semibold text-lg mb-2">
                Сегодняшнее задание
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Замени триггер на 10 мин. медитации
              </p>
              <Button variant="outline" size="sm">
                Выполнить
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Icon
                name="BookOpen"
                className="w-12 h-12 text-green-600 mx-auto mb-4"
                fallback="Circle"
              />
              <h3 className="font-semibold text-lg mb-2">База знаний</h3>
              <p className="text-gray-600 text-sm mb-4">
                40 исследований и 8 книг о восстановлении
              </p>
              <Button variant="outline" size="sm">
                Изучить
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-red-200">
            <CardContent className="p-6 text-center">
              <Icon
                name="AlertCircle"
                className="w-12 h-12 text-red-600 mx-auto mb-4"
                fallback="Circle"
              />
              <h3 className="font-semibold text-lg mb-2">Экстренная помощь</h3>
              <p className="text-gray-600 text-sm mb-4">
                Советы при острой тяге и упражнения
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 text-red-600"
              >
                Помощь
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">🩺 Программа одобрена врачом-сексологом</p>
            <p className="text-sm">Создано для твоей свободы и здоровья</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

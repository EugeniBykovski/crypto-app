"use client";

import { FC, memo } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CongratsModalProps } from "./types";

const CongratsModal: FC<CongratsModalProps> = memo(({ isOpen, onClose }) => (
  <Dialog open={isOpen}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <h2 className="text-xl font-semibold">Поздравляем!</h2>
        </DialogTitle>
        <DialogDescription>
          <div className="p-6 text-center">
            <p className="mt-2 text-gray-600">
              Вы выиграли виртуальные $5000! Скачайте приложение, чтобы начать.
            </p>
            <Button className="mt-4" onClick={onClose}>
              Закрыть
            </Button>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
));

export default CongratsModal;

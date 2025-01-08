"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GameRulesModalProps } from "./types";

const GameRulesModal: FC<GameRulesModalProps> = ({ isOpen, onPlay }) => (
  <Dialog open={isOpen}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <h2 className="text-xl font-semibold">Условия игры</h2>
        </DialogTitle>
        <DialogDescription>
          <div className="p-6 text-center">
            <p className="mt-2 text-gray-600">
              Откройте все пары картинок, чтобы выиграть!
            </p>
            <Button className="mt-4" onClick={onPlay}>
              Играть
            </Button>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default GameRulesModal;
